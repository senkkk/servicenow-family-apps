import {
    CatalogItem,
    DateVariable,
    MultiLineTextVariable,
    SelectBoxVariable,
    SingleLineTextVariable,
} from '@servicenow/sdk/core'
import { familyCatalog, lifeImprovementRequestsCategory } from './family-catalog.now'

export const lifeImprovementRequestCatalogItem = CatalogItem({
    $id: Now.ID['life_improvement_request_catalog_item'],
    name: '暮らし改善アイディアを家族で相談する',
    shortDescription: '掃除頻度やお小遣いなど、日々の生活をよくする提案を家族に共有して議論します。',
    description:
        '家族で暮らしていて気づいた困りごとや改善アイディアを申請として残し、ポータルの申請状況画面でコメントしながら話し合います。対応タスクは作らず、家族内で結論が出たら申請をクローズする運用を想定しています。',
    catalogs: [familyCatalog],
    categories: [lifeImprovementRequestsCategory],
    requestMethod: 'submit',
    availability: 'both',
    hideAddToCart: true,
    hideQuantitySelector: true,
    hideDeliveryTime: true,
    meta: ['family', 'life', 'improvement', 'discussion', 'request'],
    variables: {
        proposal_title: SingleLineTextVariable({
            question: '提案タイトル',
            mandatory: true,
            order: 100,
            exampleText: 'リビング掃除の頻度を週2回にしたい',
            width: 100,
        }),
        improvement_area: SelectBoxVariable({
            question: '改善したいテーマ',
            mandatory: true,
            order: 200,
            choices: {
                cleaning: {
                    label: '掃除・片付け',
                    sequence: 100,
                },
                allowance: {
                    label: 'お小遣い・お金',
                    sequence: 200,
                },
                chores: {
                    label: '家事分担',
                    sequence: 300,
                },
                schedule: {
                    label: '予定・時間の使い方',
                    sequence: 400,
                },
                rule: {
                    label: '家族ルール',
                    sequence: 500,
                },
                other: {
                    label: 'その他',
                    sequence: 600,
                },
            },
        }),
        current_issue: MultiLineTextVariable({
            question: '今困っていること・気づいたこと',
            mandatory: true,
            order: 300,
            exampleText: '週末まで掃除をしないと床に物が増えて、リビングで過ごしにくいです。',
            width: 100,
        }),
        proposed_change: MultiLineTextVariable({
            question: '改善アイディア',
            mandatory: true,
            order: 400,
            exampleText: '水曜日と日曜日の夜に10分だけ家族で片付ける時間を作りたいです。',
            width: 100,
        }),
        expected_benefit: MultiLineTextVariable({
            question: 'よくなりそうなこと',
            order: 500,
            exampleText: '平日もリビングを使いやすくなり、週末の掃除負担も減りそうです。',
            width: 100,
        }),
        discussion_deadline: DateVariable({
            question: '話し合いの目安日',
            order: 600,
            width: 50,
            helpText: 'いつまでに家族で結論を出したいかの目安を入力してください。',
        }),
        notes: MultiLineTextVariable({
            question: '補足・家族に聞きたいこと',
            order: 700,
            width: 100,
        }),
    },
})
