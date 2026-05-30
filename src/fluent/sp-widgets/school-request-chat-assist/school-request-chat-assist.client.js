function controller($window) {
    var c = this

    c.sourceText = ''
    c.parsedResult = null
    c.previewJson = ''
    c.errorMessage = ''
    c.infoMessage = ''
    c.loading = false

    c.parse = function () {
        c.errorMessage = ''
        c.infoMessage = ''

        var text = c.sourceText || ''
        if (!text.trim()) {
            c.errorMessage = '学校からの連絡文を入力してください。'
            return
        }

        c.loading = true
        c.parsedResult = null
        c.previewJson = ''

        c.server
            .get({
                action: 'parse',
                source_text: text,
            })
            .then(function (response) {
                var data = response && response.data ? response.data : {}
                if (data.error) {
                    throw new Error(data.error)
                }
                if (!data.result) {
                    throw new Error('変換に失敗しました。')
                }

                c.parsedResult = data.result
                c.previewJson = JSON.stringify(c.parsedResult, null, 2)
                c.infoMessage = 'AI変換が完了しました。「フォームへ反映」を押してください。'
            })
            .catch(function (error) {
                c.errorMessage = 'AI変換エラー: ' + (error && error.message ? error.message : error)
            })
            .finally(function () {
                c.loading = false
            })
    }

    c.apply = function () {
        if (!c.parsedResult) {
            return
        }

        $window.dispatchEvent(
            new $window.CustomEvent('school-request-ai-assist.apply', {
                detail: angular.copy(c.parsedResult),
            })
        )
        c.infoMessage = 'AI変換結果をフォームへ反映しました。内容を確認してから申請してください。'
    }
}
