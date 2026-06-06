;(() => {
    data.pageId = 'family-list-search'
    data.tables = [
        {
            name: 'incident',
            label: 'インシデント',
            fields: 'number,short_description,state,priority,assigned_to,sys_updated_on',
            filter: 'active=true',
            view: 'sp',
        },
        {
            name: 'sc_request',
            label: '申請',
            fields: 'number,requested_for,request_state,sys_updated_on',
            filter: '',
            view: 'sp',
        },
        {
            name: 'sc_req_item',
            label: '申請アイテム',
            fields: 'number,cat_item,stage,state,opened_by,sys_updated_on',
            filter: '',
            view: 'sp',
        },
        {
            name: 'sc_task',
            label: 'カタログタスク',
            fields: 'number,short_description,state,assigned_to,sys_updated_on',
            filter: '',
            view: 'sp',
        },
        {
            name: 'sysapproval_approver',
            label: '承認',
            fields: 'sysapproval,approver,state,sys_updated_on',
            filter: '',
            view: 'sp',
        },
        {
            name: 'kb_knowledge',
            label: 'ナレッジ',
            fields: 'number,short_description,kb_knowledge_base,workflow_state,sys_updated_on',
            filter: 'workflow_state=published',
            view: 'sp',
        },
    ]

    var requestedTable = ($sp.getParameter('table') || '').toString()
    data.selectedTable = isAllowedTable(requestedTable) ? requestedTable : data.tables[0].name

    function isAllowedTable(tableName) {
        for (var i = 0; i < data.tables.length; i++) {
            if (data.tables[i].name === tableName) {
                return true
            }
        }

        return false
    }
})()
