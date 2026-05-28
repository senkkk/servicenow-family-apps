import { CatalogClientScript, Property, RestApi } from '@servicenow/sdk/core'
import { schoolRequestCatalogItem } from './catalog/school-request.now'

const azureEndpointProperty = Property({
    $id: Now.ID['azure_openai_endpoint_property'],
    name: 'x_144721_family_ap.azure_openai_endpoint',
    type: 'string',
    value: '',
    description: 'Azure OpenAI エンドポイント URL（例: https://<resource>.openai.azure.com）',
    roles: { read: ['admin'], write: ['admin'] },
})

const azureApiKeyProperty = Property({
    $id: Now.ID['azure_openai_api_key_property'],
    name: 'x_144721_family_ap.azure_openai_api_key',
    type: 'password2',
    value: '',
    description: 'Azure OpenAI API Key',
    roles: { read: ['admin'], write: ['admin'] },
})

Property({
    $id: Now.ID['azure_openai_deployment_property'],
    name: 'x_144721_family_ap.azure_openai_deployment',
    type: 'string',
    value: 'gpt-4o-mini',
    description: 'Azure OpenAI のデプロイメント名（仮置き）',
    roles: { read: ['admin'], write: ['admin'] },
})

RestApi({
    $id: Now.ID['family_portal_ai_assist_api'],
    name: 'Family Portal AI Assist API',
    serviceId: 'family_portal_ai_assist',
    consumes: 'application/json',
    produces: 'application/json',
    routes: [
        {
            $id: Now.ID['family_portal_ai_assist_parse_route'],
            name: 'parse-school-text',
            method: 'POST',
            path: '/parse-school-text',
            authentication: true,
            authorization: false,
            script: `
(function process(request, response) {
    var body = request.body && request.body.data ? request.body.data : {};
    var sourceText = (body.source_text || '').trim();

    if (!sourceText) {
        response.setStatus(400);
        response.setBody({ error: 'source_text は必須です。' });
        return;
    }

    var endpoint = gs.getProperty('${azureEndpointProperty.name}', '');
    var apiKey = gs.getProperty('${azureApiKeyProperty.name}', '');
    var deployment = gs.getProperty('x_144721_family_ap.azure_openai_deployment', 'gpt-4o-mini');

    if (!endpoint || !apiKey) {
        response.setStatus(500);
        response.setBody({ error: 'Azure OpenAI の設定が不足しています。' });
        return;
    }

    var url = endpoint + '/openai/deployments/' + deployment + '/chat/completions?api-version=2024-10-21';

    var instruction = 'あなたは学校連絡文をServiceNow申請項目へ変換するアシスタントです。JSONのみを返答してください。';
    var schema = '{"request_title":"string","request_type":"purchase|sign_or_submit|payment|other","due_date":"YYYY-MM-DD or empty","source_summary":"string","requested_action":"string","notes":"string"}';

    var payload = {
        messages: [
            { role: 'system', content: instruction + ' 形式: ' + schema },
            { role: 'user', content: sourceText }
        ],
        temperature: 0.2,
        response_format: { type: 'json_object' }
    };

    var rm = new sn_ws.RESTMessageV2();
    rm.setHttpMethod('POST');
    rm.setEndpoint(url);
    rm.setRequestHeader('Content-Type', 'application/json');
    rm.setRequestHeader('api-key', apiKey);
    rm.setRequestBody(JSON.stringify(payload));

    var res = rm.execute();
    var status = res.getStatusCode();
    var text = res.getBody();

    if (status < 200 || status >= 300) {
        response.setStatus(502);
        response.setBody({ error: 'Azure OpenAI 呼び出しに失敗しました。', detail: text });
        return;
    }

    var outer = JSON.parse(text);
    var content = outer && outer.choices && outer.choices[0] && outer.choices[0].message ? outer.choices[0].message.content : '{}';

    var parsed = {};
    try {
        parsed = JSON.parse(content);
    } catch (e) {
        response.setStatus(502);
        response.setBody({ error: 'AI応答のJSON解析に失敗しました。', detail: content });
        return;
    }

    response.setStatus(200);
    response.setBody({ result: parsed });
})(request, response)
            `,
        },
    ],
})

CatalogClientScript({
    $id: Now.ID['school_request_chat_assist_catalog_client_script'],
    name: 'School Request Chat Assist (Portal)',
    type: 'onLoad',
    uiType: 'mobileOrServicePortal',
    global: false,
    isolateScript: false,
    active: true,
    catalogItem: schoolRequestCatalogItem,
    script: `function onLoad() {
  var panelId = 'school_request_ai_assist_panel';
  if (document.getElementById(panelId)) return;

  var root = document.querySelector('.sp-variable-layout') || document.querySelector('form');
  if (!root) return;

  var panel = document.createElement('div');
  panel.id = panelId;
  panel.className = 'panel panel-default';
  panel.innerHTML = [
    '<div class="panel-heading"><strong>学校連絡AIアシスト（β）</strong></div>',
    '<div class="panel-body">',
    '<p>学校から受領したテキストを貼り付けて「変換」を押してください。</p>',
    '<textarea id="ai_school_source_text" class="form-control" rows="6" placeholder="ここに学校からの連絡文を貼り付け"></textarea>',
    '<div style="margin-top:8px;display:flex;gap:8px;">',
    '<button type="button" id="ai_school_parse" class="btn btn-primary">変換</button>',
    '<button type="button" id="ai_school_apply" class="btn btn-default" disabled>フォームへ反映</button>',
    '</div>',
    '<pre id="ai_school_preview" style="margin-top:8px;display:none;white-space:pre-wrap;"></pre>',
    '</div>'
  ].join('');

  root.parentNode.insertBefore(panel, root);

  var parsedResult = null;
  var parseButton = panel.querySelector('#ai_school_parse');
  var applyButton = panel.querySelector('#ai_school_apply');
  var preview = panel.querySelector('#ai_school_preview');
  var source = panel.querySelector('#ai_school_source_text');

  parseButton.addEventListener('click', function () {
    var text = source.value || '';
    if (!text.trim()) {
      g_form.addErrorMessage('学校からの連絡文を入力してください。');
      return;
    }

    parseButton.disabled = true;
    parseButton.textContent = '変換中...';

    fetch('/api/x_144721_family_ap/family_portal_ai_assist/parse-school-text', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ source_text: text })
    })
      .then(function (r) { return r.json(); })
      .then(function (json) {
        if (!json || !json.result) throw new Error((json && json.error) || '変換に失敗しました。');
        parsedResult = json.result;
        preview.style.display = 'block';
        preview.textContent = JSON.stringify(parsedResult, null, 2);
        applyButton.disabled = false;
        g_form.addInfoMessage('AI変換が完了しました。「フォームへ反映」を押してください。');
      })
      .catch(function (e) {
        g_form.addErrorMessage('AI変換エラー: ' + e.message);
      })
      .finally(function () {
        parseButton.disabled = false;
        parseButton.textContent = '変換';
      });
  });

  applyButton.addEventListener('click', function () {
    if (!parsedResult) return;
    g_form.setValue('request_title', parsedResult.request_title || '');
    g_form.setValue('request_type', parsedResult.request_type || 'other');
    g_form.setValue('due_date', parsedResult.due_date || '');
    g_form.setValue('source_summary', parsedResult.source_summary || '');
    g_form.setValue('requested_action', parsedResult.requested_action || '');
    g_form.setValue('notes', parsedResult.notes || '');
    g_form.addInfoMessage('AI変換結果をフォームへ反映しました。内容を確認してから申請してください。');
  });
}`
})
