import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'

export const tableListResultsWidget = SPWidget({
    $id: Now.ID['table_list_results_widget'],
    name: 'Table List Results',
    id: 'table-list-results',
    category: 'servicePortal',
    description: '一覧表示・検索ページで選択されたテーブルを安全に一覧表示・キーワード検索するService Portal Widgetです。',
    controllerAs: 'c',
    htmlTemplate: Now.include('./table-list-results/table-list-results.html'),
    clientScript: Now.include('./table-list-results/table-list-results.client.js'),
    serverScript: Now.include('./table-list-results/table-list-results.server.js'),
    customCss: Now.include('./table-list-results/table-list-results.scss'),
    hasPreview: true,
})
