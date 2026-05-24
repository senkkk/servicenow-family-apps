import {
    CatalogItem,
    DateVariable,
    MultiLineTextVariable,
    SelectBoxVariable,
    SingleLineTextVariable,
} from '@servicenow/sdk/core'
import { familyCatalog, schoolRequestsCategory } from './family-catalog.now'

export const schoolRequestCatalogItem = CatalogItem({
    $id: Now.ID['school_request_catalog_item'],
    name: '学校からの依頼を親に相談する',
    shortDescription: '学校から届いた依頼について、親に対応を依頼します。',
    description: '学校の配布物や連絡で、購入・準備・署名・提出・支払いなど親の対応が必要なときに使います。',
    catalogs: [familyCatalog],
    categories: [schoolRequestsCategory],
    flow: Now.ref('sys_hub_flow', 'school_request_parent_fulfillment_flow'),
    requestMethod: 'request',
    availability: 'both',
    hideAddToCart: true,
    hideQuantitySelector: true,
    hideDeliveryTime: true,
    meta: ['family', 'school', 'parent', 'request'],
    variables: {
        request_title: SingleLineTextVariable({
            question: '依頼タイトル',
            mandatory: true,
            order: 100,
            exampleText: '習字セットを買って名前を書いてほしい',
            width: 100,
        }),
        request_type: SelectBoxVariable({
            question: '依頼の種類',
            mandatory: true,
            order: 200,
            choices: {
                purchase: {
                    label: '購入・準備',
                    sequence: 100,
                },
                sign_or_submit: {
                    label: '署名・提出',
                    sequence: 200,
                },
                payment: {
                    label: '支払い',
                    sequence: 300,
                },
                other: {
                    label: 'その他',
                    sequence: 400,
                },
            },
        }),
        due_date: DateVariable({
            question: '対応期限',
            mandatory: true,
            order: 300,
            width: 50,
        }),
        source_summary: MultiLineTextVariable({
            question: '学校からの連絡内容',
            mandatory: true,
            order: 400,
            width: 100,
        }),
        requested_action: MultiLineTextVariable({
            question: '親に対応してほしいこと',
            mandatory: true,
            order: 500,
            width: 100,
        }),
        notes: MultiLineTextVariable({
            question: '補足',
            order: 600,
            width: 100,
        }),
    },
})
