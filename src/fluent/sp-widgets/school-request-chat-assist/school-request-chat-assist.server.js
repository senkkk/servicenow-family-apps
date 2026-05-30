;(function () {
    data.result = null
    data.error = ''

    if (!input || input.action !== 'parse') {
        return
    }

    var sourceText = (input.source_text || '').trim()
    if (!sourceText) {
        data.error = 'source_text は必須です。'
        return
    }

    var endpoint = (gs.getProperty('x_144721_family_ap.azure_openai_endpoint', '') || '').replace(/\/+$/, '')
    var apiKey = gs.getProperty('x_144721_family_ap.azure_openai_api_key', '')
    var deployment = gs.getProperty('x_144721_family_ap.azure_openai_deployment', 'gpt-4o-mini')

    if (!endpoint || !apiKey || !deployment) {
        data.error = 'Azure OpenAI の設定が不足しています。'
        return
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
                    enum: ['purchase', 'sign_or_submit', 'payment', 'other'],
                },
                due_date: { type: 'string' },
                source_summary: { type: 'string' },
                requested_action: { type: 'string' },
                notes: { type: 'string' },
            },
        }
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
            text,
        ].join('\n')
    }

    function extractResponseText(parsed) {
        if (parsed && parsed.output_text) {
            return parsed.output_text
        }

        var output = parsed && parsed.output ? parsed.output : []
        for (var i = 0; i < output.length; i++) {
            var content = output[i] && output[i].content ? output[i].content : []
            for (var j = 0; j < content.length; j++) {
                if (content[j] && content[j].text) {
                    return content[j].text
                }
                if (content[j] && content[j].output_text) {
                    return content[j].output_text
                }
            }
        }

        return ''
    }

    try {
        var payload = {
            model: deployment,
            store: false,
            input: [
                {
                    role: 'user',
                    content: [
                        {
                            type: 'input_text',
                            text: buildPrompt(sourceText),
                        },
                    ],
                },
            ],
            text: {
                format: {
                    type: 'json_schema',
                    name: 'school_request_parse',
                    strict: true,
                    schema: getSchoolRequestSchema(),
                },
            },
            max_output_tokens: 600,
        }

        var url = endpoint + '/openai/v1/responses'

        var rm = new sn_ws.RESTMessageV2()
        rm.setHttpMethod('POST')
        rm.setEndpoint(url)
        rm.setRequestHeader('Content-Type', 'application/json')
        rm.setRequestHeader('api-key', apiKey)
        rm.setRequestBody(JSON.stringify(payload))

        var res = rm.execute()
        var status = res.getStatusCode()
        var text = res.getBody()

        if (status < 200 || status >= 300) {
            data.error = 'Azure OpenAI 呼び出しに失敗しました。'
            gs.error('School Request Chat Assist Azure OpenAI error: status=' + status + ', body=' + text)
            return
        }

        var outer = JSON.parse(text)
        var content = extractResponseText(outer)

        if (!content) {
            data.error = 'AI応答からテキストを取得できませんでした。'
            gs.error('School Request Chat Assist Azure OpenAI response did not include output text: ' + text)
            return
        }

        data.result = JSON.parse(content)
    } catch (e) {
        data.error = 'AI応答のJSON解析または呼び出しに失敗しました。'
        gs.error('School Request Chat Assist widget error: ' + e.message)
    }
})()
