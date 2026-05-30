import { CatalogClientScript, Property, RestApi } from '@servicenow/sdk/core'
import { schoolRequestCatalogItem, schoolRequestConversationCatalogItem } from './catalog/school-request.now'

const azureEndpointProperty = Property({
    $id: Now.ID['azure_openai_endpoint_property'],
    name: 'x_144721_family_ap.azure_openai_endpoint',
    $meta: { installMethod: 'once' },
    type: 'string',
    description: 'Azure OpenAI エンドポイント URL（例: https://<resource>.openai.azure.com）',
    roles: { read: ['admin'], write: ['admin'] },
})

const azureApiKeyProperty = Property({
    $id: Now.ID['azure_openai_api_key_property'],
    name: 'x_144721_family_ap.azure_openai_api_key',
    $meta: { installMethod: 'once' },
    type: 'password2',
    description: 'Azure OpenAI API Key',
    roles: { read: ['admin'], write: ['admin'] },
})

Property({
    $id: Now.ID['azure_openai_deployment_property'],
    name: 'x_144721_family_ap.azure_openai_deployment',
    $meta: { installMethod: 'once' },
    type: 'string',
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

    var endpoint = (gs.getProperty('${azureEndpointProperty.name}', '') || '').replace(/\/+$/, '');
    var apiKey = gs.getProperty('${azureApiKeyProperty.name}', '');
    var deployment = gs.getProperty('x_144721_family_ap.azure_openai_deployment', 'gpt-4o-mini');

    if (!endpoint || !apiKey || !deployment) {
        response.setStatus(500);
        response.setBody({ error: 'Azure OpenAI の設定が不足しています。' });
        return;
    }

    function getSchoolRequestSchema() {
        return {
            type: 'object',
            additionalProperties: false,
            required: ['request_title', 'request_type', 'due_date', 'source_summary', 'requested_action', 'notes'],
            properties: {
                request_title: { type: 'string' },
                request_type: {
                    type: 'string',
                    enum: ['purchase', 'sign_or_submit', 'payment', 'other']
                },
                due_date: { type: 'string' },
                source_summary: { type: 'string' },
                requested_action: { type: 'string' },
                notes: { type: 'string' }
            }
        };
    }

    function buildPrompt(text) {
        return [
            'あなたは学校連絡文をServiceNow申請項目へ変換するアシスタントです。',
            '学校から受領した連絡文を読み取り、保護者が申請フォームへ転記しやすいように整理してください。',
            '不明な項目は空文字にしてください。対応期限が明確な場合のみ YYYY-MM-DD 形式で返してください。',
            'request_type は purchase, sign_or_submit, payment, other のいずれかを選んでください。',
            'source_summary, requested_action, notes は簡潔な日本語で返してください。',
            '',
            '学校からの連絡文:',
            text
        ].join('\n');
    }

    function extractResponseText(parsed) {
        if (parsed && parsed.output_text) {
            return parsed.output_text;
        }

        var output = parsed && parsed.output ? parsed.output : [];
        for (var i = 0; i < output.length; i++) {
            var content = output[i] && output[i].content ? output[i].content : [];
            for (var j = 0; j < content.length; j++) {
                if (content[j] && content[j].text) {
                    return content[j].text;
                }
                if (content[j] && content[j].output_text) {
                    return content[j].output_text;
                }
            }
        }

        return '';
    }

    var payload = {
        model: deployment,
        store: false,
        input: [
            {
                role: 'user',
                content: [
                    {
                        type: 'input_text',
                        text: buildPrompt(sourceText)
                    }
                ]
            }
        ],
        text: {
            format: {
                type: 'json_schema',
                name: 'school_request_parse',
                strict: true,
                schema: getSchoolRequestSchema()
            }
        },
        max_output_tokens: 600
    };

    var url = endpoint + '/openai/v1/responses';

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
    var content = extractResponseText(outer);

    if (!content) {
        response.setStatus(502);
        response.setBody({ error: 'AI応答からテキストを取得できませんでした。', detail: text });
        return;
    }

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
  var eventName = 'school-request-ai-assist.apply';
  var globalObject = typeof globalThis !== 'undefined' ? globalThis : null;

  if (!globalObject || !globalObject.addEventListener || !globalObject.removeEventListener) {
    g_form.addErrorMessage('AIアシストの初期化に失敗しました。ブラウザのイベントAPIを参照できません。');
    return;
  }

  if (globalObject.schoolRequestChatAssistApplyHandler) {
    globalObject.removeEventListener(eventName, globalObject.schoolRequestChatAssistApplyHandler);
  }

  globalObject.schoolRequestChatAssistApplyHandler = function (event) {
    var parsedResult = event && event.detail ? event.detail : {};
    if (!parsedResult) return;

    g_form.setValue('request_title', parsedResult.request_title || '');
    g_form.setValue('request_type', parsedResult.request_type || 'other');
    g_form.setValue('due_date', parsedResult.due_date || '');
    g_form.setValue('source_summary', parsedResult.source_summary || '');
    g_form.setValue('requested_action', parsedResult.requested_action || '');
    g_form.setValue('notes', parsedResult.notes || '');
    g_form.addInfoMessage('AI変換結果をフォームへ反映しました。内容を確認してから申請してください。');
  };

  globalObject.addEventListener(eventName, globalObject.schoolRequestChatAssistApplyHandler);
}`
})

CatalogClientScript({
    $id: Now.ID['school_request_conversation_assist_catalog_client_script'],
    name: 'School Request Conversation Assist (Portal)',
    type: 'onLoad',
    uiType: 'mobileOrServicePortal',
    global: false,
    isolateScript: false,
    active: true,
    catalogItem: schoolRequestConversationCatalogItem,
    script: `function onLoad() {
  var eventName = 'school-request-conversation-assist.apply';
  var globalObject = typeof globalThis !== 'undefined' ? globalThis : null;

  if (!globalObject || !globalObject.addEventListener || !globalObject.removeEventListener) {
    g_form.addErrorMessage('AIチャット相談の初期化に失敗しました。ブラウザのイベントAPIを参照できません。');
    return;
  }

  if (globalObject.schoolRequestConversationAssistApplyHandler) {
    globalObject.removeEventListener(eventName, globalObject.schoolRequestConversationAssistApplyHandler);
  }

  globalObject.schoolRequestConversationAssistApplyHandler = function (event) {
    var draft = event && event.detail ? event.detail : {};
    if (!draft) return;

    g_form.setValue('request_title', draft.request_title || '');
    g_form.setValue('request_type', draft.request_type || 'other');
    g_form.setValue('due_date', draft.due_date || '');
    g_form.setValue('source_summary', draft.source_summary || '');
    g_form.setValue('requested_action', draft.requested_action || '');
    g_form.setValue('notes', draft.notes || '');
    g_form.addInfoMessage('AIチャットで整理した申請案をフォームへ反映しました。内容を確認してから申請してください。');
  };

  globalObject.addEventListener(eventName, globalObject.schoolRequestConversationAssistApplyHandler);
}`
})
