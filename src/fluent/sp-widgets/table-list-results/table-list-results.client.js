function controller($location, $window) {
    var c = this

    c.data = c.data || {}
    c.keyword = c.data.keyword || ''

    c.search = function () {
        var params = angular.copy($location.search()) || {}
        params.id = params.id || 'family-list-search'
        params.table = c.data.tableName || params.table || 'incident'
        params.spa = '1'

        if (c.keyword) {
            params.q = c.keyword
        } else {
            delete params.q
        }

        $window.location.search = c.toQueryString(params)
    }

    c.clearSearch = function () {
        c.keyword = ''
        c.search()
    }

    c.toQueryString = function (params) {
        var parts = []
        angular.forEach(params, function (value, key) {
            if (value !== undefined && value !== null && value !== '') {
                parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
            }
        })

        return '?' + parts.join('&')
    }
}
