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

    var endpoint = gs.getProperty('x_144721_family_ap.azure_openai_endpoint', '')
    var apiKey = gs.getProperty('x_144721_family_ap.azure_openai_api_key', '')
    var deployment = gs.getProperty('x_144721_family_ap.azure_openai_deployment', 'gpt-4o-mini')

    if (!endpoint || !apiKey) {
        data.error = 'Azure OpenAI の設定が不足しています。'
        return
    }

    try {
        var url = endpoint + '/openai/deployments/' + deployment + '/chat/completions?api-version=2024-10-21'
        var instruction = 'あなたは学校連絡文をServiceNow申請項目へ変換するアシスタントです。JSONのみを返答してください。'
        var schema =
            '{"request_title":"string","request_type":"purchase|sign_or_submit|payment|other","due_date":"YYYY-MM-DD or empty","source_summary":"string","requested_action":"string","notes":"string"}'

        var payload = {
            messages: [
                { role: 'system', content: instruction + ' 形式: ' + schema },
                { role: 'user', content: sourceText },
            ],
            temperature: 0.2,
            response_format: { type: 'json_object' },
        }

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
        var content = outer && outer.choices && outer.choices[0] && outer.choices[0].message ? outer.choices[0].message.content : '{}'

        data.result = JSON.parse(content)
    } catch (e) {
        data.error = 'AI応答のJSON解析または呼び出しに失敗しました。'
        gs.error('School Request Chat Assist widget error: ' + e.message)
    }
})()
