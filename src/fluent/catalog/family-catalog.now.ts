import { Record } from '@servicenow/sdk/core'

export const familyCatalog = Record({
    $id: Now.ID['family_catalog'],
    table: 'sc_catalog',
    data: {
        title: 'ファミリーカタログ',
        description: '家族向けセルフサービス申請のカタログです。',
        active: true,
    },
})

export const schoolRequestsCategory = Record({
    $id: Now.ID['school_requests_category'],
    table: 'sc_category',
    data: {
        title: '学校からの依頼',
        description: '学校からの配布物や連絡をもとに、親の対応が必要な依頼をまとめます。',
        sc_catalog: familyCatalog,
        active: true,
    },
})
