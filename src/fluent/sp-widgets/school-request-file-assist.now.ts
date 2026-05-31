import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'

export const schoolRequestFileAssistWidget = SPWidget({
    $id: Now.ID['school_request_file_assist_widget'],
    name: 'School Request File Assist',
    id: 'school-request-file-assist',
    category: 'serviceCatalog',
    description: '学校からの配布物PDFや撮影写真をAIで解析し、カタログフォームへ反映するService Portal Widgetです。',
    controllerAs: 'c',
    htmlTemplate: Now.include('./school-request-file-assist/school-request-file-assist.html'),
    clientScript: Now.include('./school-request-file-assist/school-request-file-assist.client.js'),
    serverScript: Now.include('./school-request-file-assist/school-request-file-assist.server.js'),
    customCss: Now.include('./school-request-file-assist/school-request-file-assist.scss'),
    hasPreview: true,
})
