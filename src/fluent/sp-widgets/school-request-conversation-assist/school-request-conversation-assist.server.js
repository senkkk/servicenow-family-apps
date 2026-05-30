;(function () {
    data.result = null
    data.error = ''

    if (!input || input.action !== 'chat') {
        return
    }

    var messages = input.messages || []
    var currentDraft = input.draft || {}
    if (!messages.length) {
        data.error = 'messages は必須です。'
        return
    }

    var endpoint = (gs.getProperty('x_144721_family_ap.azure_openai_endpoint', '') || '').replace(/\/+$|\\+$/g, '')
    var apiKey = gs.getProperty('x_144721_family_ap.azure_openai_api_key', '')
    var deployment = gs.getProperty('x_144721_family_ap.azure_openai_deployment', 'gpt-4o-mini')

    if (!endpoint || !apiKey || !deployment) {
        data.error = 'Azure OpenAI の設定が不足しています。'
        return
    }

    function getConversationSchema() {
        return {
            type: 'object',
            additionalProperties: false,
            required: ['assistant_message', 'ready_to_apply', 'draft'],
            properties: {
                assistant_message: { type: 'string' },
                ready_to_apply: { type: 'boolean' },
                draft: {
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
                },
            },
        }
    }

    function buildConversationPrompt(draft, chatMessages) {
        var lines = [
            'あなたは学校からの連絡をServiceNowの申請フォームに落とし込むための日本語チャットアシスタントです。',
            'ユーザーと何度か壁打ちしながら、保護者に依頼する内容を明確にしてください。',
            '毎回、会話に自然なassistant_messageを返しつつ、現時点の申請案draftも更新してください。',
            'request_type は purchase, sign_or_submit, payment, other のいずれかを選択します。',
            'due_date は期限が明確な場合のみ YYYY-MM-DD 形式にし、不明なら空文字にしてください。',
            '不足情報がある場合はassistant_messageの最後で質問を1つだけしてください。十分まとまった場合はready_to_applyをtrueにしてください。',
            'source_summary, requested_action, notes は申請フォームにそのまま入れられる簡潔な日本語にしてください。',
            '',
            '現在の申請案:',
            JSON.stringify(draft || {}),
            '',
            '会話履歴:',
        ]

        for (var i = 0; i < chatMessages.length; i++) {
            var message = chatMessages[i] || {}
            var roleLabel = message.role === 'assistant' ? 'AI' : 'ユーザー'
            var text = (message.content || '').toString()
            if (!text) {
                continue
            }
            lines.push(roleLabel + ': ' + text)
        }

        return lines.join('\n')
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
                            text: buildConversationPrompt(currentDraft, messages),
                        },
                    ],
                },
            ],
            text: {
                format: {
                    type: 'json_schema',
                    name: 'school_request_conversation',
                    strict: true,
                    schema: getConversationSchema(),
                },
            },
            max_output_tokens: 900,
        }

        var rm = new sn_ws.RESTMessageV2()
        rm.setHttpMethod('POST')
        rm.setEndpoint(endpoint + '/openai/v1/responses')
        rm.setRequestHeader('Content-Type', 'application/json')
        rm.setRequestHeader('api-key', apiKey)
        rm.setRequestBody(JSON.stringify(payload))

        var res = rm.execute()
        var status = res.getStatusCode()
        var text = res.getBody()

        if (status < 200 || status >= 300) {
            data.error = 'Azure OpenAI 呼び出しに失敗しました。'
            gs.error('School Request Conversation Assist Azure OpenAI error: status=' + status + ', body=' + text)
            return
        }

        var outer = JSON.parse(text)
        var content = extractResponseText(outer)
        if (!content) {
            data.error = 'AI応答からテキストを取得できませんでした。'
            gs.error('School Request Conversation Assist Azure OpenAI response did not include output text: ' + text)
            return
        }

        data.result = JSON.parse(content)
    } catch (e) {
        data.error = 'AI応答のJSON解析または呼び出しに失敗しました。'
        gs.error('School Request Conversation Assist widget error: ' + e.message)
    }
})()
