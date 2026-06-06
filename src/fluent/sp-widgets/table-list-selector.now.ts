import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'

export const tableListSelectorWidget = SPWidget({
    $id: Now.ID['table_list_selector_widget'],
    name: 'Table List Selector',
    id: 'table-list-selector',
    category: 'servicePortal',
    description: '一覧表示・検索ページで標準一覧ウィジェットへ渡すテーブルを選択するService Portal Widgetです。',
    controllerAs: 'c',
    htmlTemplate: Now.include('./table-list-selector/table-list-selector.html'),
    clientScript: Now.include('./table-list-selector/table-list-selector.client.js'),
    serverScript: Now.include('./table-list-selector/table-list-selector.server.js'),
    customCss: Now.include('./table-list-selector/table-list-selector.scss'),
    hasPreview: true,
})
