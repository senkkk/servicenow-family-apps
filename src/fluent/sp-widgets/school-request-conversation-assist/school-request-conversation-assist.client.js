function controller($window) {
    var c = this

    c.messages = []
    c.currentMessage = ''
    c.draft = null
    c.errorMessage = ''
    c.infoMessage = ''
    c.loading = false
    c.readyToApply = false

    c.requestTypeLabels = {
        purchase: '購入・準備',
        sign_or_submit: '署名・提出',
        payment: '支払い',
        other: 'その他',
    }

    c.getRequestTypeLabel = function (value) {
        return c.requestTypeLabels[value] || '未整理'
    }

    c.useExample = function () {
        c.currentMessage = '学校からの連絡文をここに貼り付けます。親に何をお願いすればよいか、申請内容を一緒に整理してください。'
    }

    c.reset = function () {
        c.messages = []
        c.currentMessage = ''
        c.draft = null
        c.errorMessage = ''
        c.infoMessage = ''
        c.readyToApply = false
    }

    c.send = function () {
        c.errorMessage = ''
        c.infoMessage = ''

        var text = c.currentMessage || ''
        if (!text.trim()) {
            c.errorMessage = 'AIへ送るメッセージを入力してください。'
            return
        }

        c.loading = true
        c.messages.push({ role: 'user', content: text.trim() })
        c.currentMessage = ''

        c.server
            .get({
                action: 'chat',
                messages: angular.copy(c.messages),
                draft: angular.copy(c.draft || {}),
            })
            .then(function (response) {
                var data = response && response.data ? response.data : {}
                if (data.error) {
                    throw new Error(data.error)
                }
                if (!data.result || !data.result.assistant_message) {
                    throw new Error('AI応答の取得に失敗しました。')
                }

                c.messages.push({ role: 'assistant', content: data.result.assistant_message })
                c.draft = data.result.draft || c.draft
                c.readyToApply = !!data.result.ready_to_apply
                c.infoMessage = c.readyToApply
                    ? '申請案がまとまりました。内容を確認し、「フォームへ反映」を押してください。'
                    : '追加で確認したいことがあれば続けて送ってください。'
            })
            .catch(function (error) {
                c.errorMessage = 'AIチャットエラー: ' + (error && error.message ? error.message : error)
                c.messages.pop()
            })
            .finally(function () {
                c.loading = false
            })
    }

    c.apply = function () {
        if (!c.draft) {
            return
        }

        $window.dispatchEvent(
            new $window.CustomEvent('school-request-conversation-assist.apply', {
                detail: angular.copy(c.draft),
            })
        )
        c.infoMessage = 'AIチャットで整理した申請案をフォームへ反映しました。内容を確認してから申請してください。'
    }
}
