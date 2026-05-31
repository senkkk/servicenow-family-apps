function controller($window) {
    var c = this

    c.selectedFile = null
    c.selectedFileName = ''
    c.selectedFileType = ''
    c.selectedFileSizeLabel = ''
    c.parsedResult = null
    c.previewJson = ''
    c.errorMessage = ''
    c.infoMessage = ''
    c.loading = false

    c.requestTypeLabels = {
        purchase: '購入・準備',
        sign_or_submit: '署名・提出',
        payment: '支払い',
        other: 'その他',
    }

    c.getRequestTypeLabel = function (value) {
        return c.requestTypeLabels[value] || '未整理'
    }

    c.onFileChange = function (files) {
        c.errorMessage = ''
        c.infoMessage = ''
        c.parsedResult = null
        c.previewJson = ''

        var file = files && files.length ? files[0] : null
        c.selectedFile = file
        c.selectedFileName = file ? file.name : ''
        c.selectedFileType = file ? file.type : ''
        c.selectedFileSizeLabel = file ? formatBytes(file.size) : ''

        if (file && !isSupportedFile(file)) {
            c.errorMessage = 'PDFまたは画像ファイル（JPEG/PNG/HEIC等）を選択してください。'
        }
    }

    c.analyze = function () {
        c.errorMessage = ''
        c.infoMessage = ''
        c.parsedResult = null
        c.previewJson = ''

        if (!c.selectedFile) {
            c.errorMessage = '学校からの配布物PDFまたは写真を選択してください。'
            return
        }

        if (!isSupportedFile(c.selectedFile)) {
            c.errorMessage = 'PDFまたは画像ファイル（JPEG/PNG/HEIC等）を選択してください。'
            return
        }

        if (c.selectedFile.size > 12 * 1024 * 1024) {
            c.errorMessage = '解析できるファイルサイズは12MBまでです。必要に応じて圧縮または分割してください。'
            return
        }

        c.loading = true
        readAsDataUrl(c.selectedFile)
            .then(function (dataUrl) {
                return c.server.get({
                    action: 'analyze_file',
                    file_name: c.selectedFile.name,
                    file_type: c.selectedFile.type || inferMimeType(c.selectedFile.name),
                    file_data: dataUrl,
                })
            })
            .then(function (response) {
                var data = response && response.data ? response.data : {}
                if (data.error) {
                    throw new Error(data.error)
                }
                if (!data.result) {
                    throw new Error('ファイル解析に失敗しました。')
                }

                c.parsedResult = data.result
                c.previewJson = JSON.stringify(c.parsedResult, null, 2)
                c.infoMessage = 'AI解析が完了しました。「フォームへ反映」を押してください。'
            })
            .catch(function (error) {
                c.errorMessage = 'AIファイル解析エラー: ' + (error && error.message ? error.message : error)
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
            new $window.CustomEvent('school-request-file-assist.apply', {
                detail: angular.copy(c.parsedResult),
            })
        )
        c.infoMessage = 'AI解析結果をフォームへ反映しました。内容を確認し、原本ファイルも添付してから申請してください。'
    }

    function readAsDataUrl(file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader()
            reader.onload = function () {
                resolve(reader.result)
            }
            reader.onerror = function () {
                reject(new Error('ファイルの読み込みに失敗しました。'))
            }
            reader.readAsDataURL(file)
        })
    }

    function isSupportedFile(file) {
        var type = file.type || inferMimeType(file.name)
        return type === 'application/pdf' || type.indexOf('image/') === 0
    }

    function inferMimeType(fileName) {
        var lower = (fileName || '').toLowerCase()
        if (lower.match(/\.pdf$/)) return 'application/pdf'
        if (lower.match(/\.jpe?g$/)) return 'image/jpeg'
        if (lower.match(/\.png$/)) return 'image/png'
        if (lower.match(/\.gif$/)) return 'image/gif'
        if (lower.match(/\.webp$/)) return 'image/webp'
        if (lower.match(/\.heic$/)) return 'image/heic'
        if (lower.match(/\.heif$/)) return 'image/heif'
        return 'application/octet-stream'
    }

    function formatBytes(bytes) {
        if (!bytes && bytes !== 0) return ''
        if (bytes < 1024) return bytes + ' B'
        if (bytes < 1024 * 1024) return Math.round(bytes / 102.4) / 10 + ' KB'
        return Math.round(bytes / 1024 / 102.4) / 10 + ' MB'
    }
}
