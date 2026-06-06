function controller($location, $window) {
    var c = this

    c.data = c.data || {}

    c.applySelection = function () {
        if (!c.data.selectedTable) {
            return
        }

        var selected = c.findTable(c.data.selectedTable)
        var params = angular.copy($location.search()) || {}
        params.id = c.data.pageId || 'family-list-search'
        params.table = selected.name
        delete params.filter
        delete params.fields
        delete params.view
        delete params.q
        params.spa = '1'

        $window.location.search = c.toQueryString(params)
    }

    c.findTable = function (tableName) {
        var tables = c.data.tables || []
        for (var i = 0; i < tables.length; i++) {
            if (tables[i].name === tableName) {
                return tables[i]
            }
        }

        return tables.length ? tables[0] : { name: tableName }
    }

    c.toQueryString = function (params) {
        var parts = []
        angular.forEach(params, function (value, key) {
            if (value !== undefined && value !== null) {
                parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(value))
            }
        })

        return '?' + parts.join('&')
    }
}
