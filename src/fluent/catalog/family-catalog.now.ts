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

export const lifeImprovementRequestsCategory = Record({
    $id: Now.ID['life_improvement_requests_category'],
    table: 'sc_category',
    data: {
        title: '暮らし改善アイディア',
        description: '掃除頻度やお小遣いなど、家族の生活をよくする提案を話し合うための申請をまとめます。',
        sc_catalog: familyCatalog,
        active: true,
    },
})
