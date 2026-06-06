;(() => {
    data.tables = [
        {
            name: 'incident',
            label: 'インシデント',
            fields: 'number,short_description,state,priority,assigned_to,sys_updated_on',
            filter: 'active=true',
            searchFields: 'number,short_description,description,assigned_to',
        },
        {
            name: 'sc_request',
            label: '申請',
            fields: 'number,requested_for,request_state,sys_updated_on',
            filter: '',
            searchFields: 'number,requested_for,request_state',
        },
        {
            name: 'sc_req_item',
            label: '申請アイテム',
            fields: 'number,cat_item,stage,state,opened_by,sys_updated_on',
            filter: '',
            searchFields: 'number,cat_item,stage,state,opened_by',
        },
        {
            name: 'sc_task',
            label: 'カタログタスク',
            fields: 'number,short_description,state,assigned_to,sys_updated_on',
            filter: '',
            searchFields: 'number,short_description,state,assigned_to',
        },
        {
            name: 'sysapproval_approver',
            label: '承認',
            fields: 'sysapproval,approver,state,sys_updated_on',
            filter: '',
            searchFields: 'sysapproval,approver,state',
        },
        {
            name: 'kb_knowledge',
            label: 'ナレッジ',
            fields: 'number,short_description,kb_knowledge_base,workflow_state,sys_updated_on',
            filter: 'workflow_state=published',
            searchFields: 'number,short_description,text,kb_knowledge_base',
        },
    ]

    data.windowSize = 20
    data.rows = []
    data.columns = []
    data.errorMessage = ''
    data.keyword = ($sp.getParameter('q') || '').toString()

    var requestedTable = ($sp.getParameter('table') || '').toString()
    data.selectedTable = findAllowedTable(requestedTable) || data.tables[0]
    data.tableName = data.selectedTable.name
    data.tableLabel = data.selectedTable.label

    var gr = new GlideRecordSecure(data.tableName)
    if (!gr.isValid()) {
        data.errorMessage = '選択されたテーブルを読み込めませんでした。'
        return
    }

    if (data.selectedTable.filter) {
        gr.addEncodedQuery(data.selectedTable.filter)
    }

    addKeywordQuery(gr, data.selectedTable, data.keyword)
    gr.orderByDesc('sys_updated_on')
    gr.setLimit(data.windowSize)
    gr.query()

    var fieldNames = splitCsv(data.selectedTable.fields)
    data.columns = buildColumns(gr, fieldNames)

    while (gr.next()) {
        var row = {
            sysId: gr.getUniqueValue(),
            cells: [],
        }

        for (var i = 0; i < fieldNames.length; i++) {
            var fieldName = fieldNames[i]
            if (!canReadField(gr, fieldName)) {
                row.cells.push('')
                continue
            }

            row.cells.push(gr.getDisplayValue(fieldName))
        }

        data.rows.push(row)
    }

    function addKeywordQuery(record, tableConfig, keyword) {
        if (!keyword) {
            return
        }

        var safeKeyword = keyword.replace(/\^/g, ' ')
        var searchFields = splitCsv(tableConfig.searchFields)
        var keywordQuery = null

        for (var i = 0; i < searchFields.length; i++) {
            if (!record.isValidField(searchFields[i])) {
                continue
            }

            if (!keywordQuery) {
                keywordQuery = record.addQuery(searchFields[i], 'LIKE', safeKeyword)
            } else {
                keywordQuery.addOrCondition(searchFields[i], 'LIKE', safeKeyword)
            }
        }
    }

    function buildColumns(record, fieldNames) {
        var columns = []

        for (var i = 0; i < fieldNames.length; i++) {
            var fieldName = fieldNames[i]
            var label = fieldName

            if (canReadField(record, fieldName)) {
                label = record.getElement(fieldName).getLabel()
            }

            columns.push({
                name: fieldName,
                label: label,
            })
        }

        return columns
    }


    function canReadField(record, fieldName) {
        if (!record.isValidField(fieldName)) {
            return false
        }

        var element = record.getElement(fieldName)
        return element && element.canRead()
    }

    function findAllowedTable(tableName) {
        for (var i = 0; i < data.tables.length; i++) {
            if (data.tables[i].name === tableName) {
                return data.tables[i]
            }
        }

        return null
    }

    function splitCsv(value) {
        var results = []
        var parts = (value || '').toString().split(',')
        for (var i = 0; i < parts.length; i++) {
            var part = parts[i].trim()
            if (part) {
                results.push(part)
            }
        }

        return results
    }
})()
