;(function () {
    data.result = null
    data.error = ''

    if (!input || input.action !== 'analyze_file') {
        return
    }

    var fileName = (input.file_name || '').toString()
    var fileType = (input.file_type || '').toString()
    var fileData = (input.file_data || '').toString()

    if (!fileName || !fileData) {
        data.error = 'file_name と file_data は必須です。'
        return
    }

    if (!fileType) {
        fileType = inferMimeType(fileName)
    }

    if (!isSupportedFileType(fileType)) {
        data.error = 'PDFまたは画像ファイルを選択してください。'
        return
    }

    var endpoint = (gs.getProperty('x_144721_family_ap.azure_openai_endpoint', '') || '').replace(/\/+$|\\+$/g, '')
    var apiKey = gs.getProperty('x_144721_family_ap.azure_openai_api_key', '')
    var deployment = gs.getProperty('x_144721_family_ap.azure_openai_deployment', 'gpt-4o-mini')

    if (!endpoint || !apiKey || !deployment) {
        data.error = 'Azure OpenAI の設定が不足しています。'
        return
    }

    function inferMimeType(name) {
        var lower = (name || '').toLowerCase()
        if (lower.match(/\.pdf$/)) return 'application/pdf'
        if (lower.match(/\.jpe?g$/)) return 'image/jpeg'
        if (lower.match(/\.png$/)) return 'image/png'
        if (lower.match(/\.gif$/)) return 'image/gif'
        if (lower.match(/\.webp$/)) return 'image/webp'
        if (lower.match(/\.heic$/)) return 'image/heic'
        if (lower.match(/\.heif$/)) return 'image/heif'
        return 'application/octet-stream'
    }

    function isSupportedFileType(type) {
        return type === 'application/pdf' || type.indexOf('image/') === 0
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

    function buildPrompt(name, type) {
        return [
            'あなたは学校配布物をServiceNow申請項目へ変換する日本語アシスタントです。',
            '添付されたPDFまたは写真を読み取り、保護者へ依頼すべき内容を申請フォームへ転記しやすい形で整理してください。',
            '購入・準備・署名・提出・支払い・持参物・期限・場所・金額・注意事項を優先して抽出してください。',
            '不明な項目は空文字にしてください。対応期限が明確な場合のみ YYYY-MM-DD 形式で返してください。',
            'request_type は purchase, sign_or_submit, payment, other のいずれかを選んでください。複数に該当する場合は保護者の主な行動で選んでください。',
            'source_summary, requested_action, notes は簡潔な日本語で返してください。OCRに自信がない箇所や読み取れない箇所はnotesに明記してください。',
            '',
            'ファイル名: ' + name,
            'ファイル形式: ' + type,
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

    function buildFileContent(name, type, dataUrl) {
        if (type === 'application/pdf') {
            return {
                type: 'input_file',
                filename: name,
                file_data: dataUrl,
            }
        }

        return {
            type: 'input_image',
            image_url: dataUrl,
        }
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
                            text: buildPrompt(fileName, fileType),
                        },
                        buildFileContent(fileName, fileType, fileData),
                    ],
                },
            ],
            text: {
                format: {
                    type: 'json_schema',
                    name: 'school_request_file_parse',
                    strict: true,
                    schema: getSchoolRequestSchema(),
                },
            },
            max_output_tokens: 700,
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
            gs.error('School Request File Assist Azure OpenAI error: status=' + status + ', body=' + text)
            return
        }

        var outer = JSON.parse(text)
        var content = extractResponseText(outer)

        if (!content) {
            data.error = 'AI応答からテキストを取得できませんでした。'
            gs.error('School Request File Assist Azure OpenAI response did not include output text: ' + text)
            return
        }

        data.result = JSON.parse(content)
    } catch (e) {
        data.error = 'AI応答のJSON解析または呼び出しに失敗しました。'
        gs.error('School Request File Assist widget error: ' + e.message)
    }
})()
