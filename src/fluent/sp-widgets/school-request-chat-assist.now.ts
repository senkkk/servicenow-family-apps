import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'

export const schoolRequestChatAssistWidget = SPWidget({
    $id: Now.ID['school_request_chat_assist_widget'],
    name: 'School Request Chat Assist',
    id: 'school-request-chat-assist',
    category: 'serviceCatalog',
    description: '学校連絡文をAIで解析し、カタログフォームへ反映するService Portal Widgetです。',
    controllerAs: 'c',
    htmlTemplate: Now.include('./school-request-chat-assist/school-request-chat-assist.html'),
    clientScript: Now.include('./school-request-chat-assist/school-request-chat-assist.client.js'),
    serverScript: Now.include('./school-request-chat-assist/school-request-chat-assist.server.js'),
    customCss: Now.include('./school-request-chat-assist/school-request-chat-assist.scss'),
    hasPreview: true,
})
