import '@servicenow/sdk/global'
import { SPWidget } from '@servicenow/sdk/core'

export const schoolRequestConversationAssistWidget = SPWidget({
    $id: Now.ID['school_request_conversation_assist_widget'],
    name: 'School Request Conversation Assist',
    id: 'school-request-conversation-assist',
    category: 'serviceCatalog',
    description: '学校連絡の内容をAIチャットで壁打ちしながら整理し、カタログフォームへ反映するService Portal Widgetです。',
    controllerAs: 'c',
    htmlTemplate: Now.include('./school-request-conversation-assist/school-request-conversation-assist.html'),
    clientScript: Now.include('./school-request-conversation-assist/school-request-conversation-assist.client.js'),
    serverScript: Now.include('./school-request-conversation-assist/school-request-conversation-assist.server.js'),
    customCss: Now.include('./school-request-conversation-assist/school-request-conversation-assist.scss'),
    hasPreview: true,
})
