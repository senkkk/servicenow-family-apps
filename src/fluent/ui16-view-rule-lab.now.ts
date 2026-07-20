import '@servicenow/sdk/global'
import {
    ApplicationMenu,
    BooleanColumn,
    DateColumn,
    DecimalColumn,
    Form,
    List,
    MultiLineTextColumn,
    Record,
    ReferenceColumn,
    StringColumn,
    Table,
    default_view,
} from '@servicenow/sdk/core'

export const x_144721_family_ap_ui16_request = Table({
    name: 'x_144721_family_ap_ui16_request',
    label: 'UI16 View Rule 検証依頼',
    display: 'short_description',
    extends: 'task',
    autoNumber: {
        prefix: 'UVR',
        number: 1000,
        numberOfDigits: 7,
    },
    audit: true,
    actions: ['create', 'read', 'update', 'delete'],
    schema: {
        request_type: StringColumn({
            label: '依頼種別',
            mandatory: true,
            choices: {
                purchase: '購入・準備',
                sign_or_submit: '署名・提出',
                payment: '支払い',
                other: 'その他',
            },
            defaultValue: 'purchase',
        }),
        urgency_level: StringColumn({
            label: '緊急度',
            mandatory: true,
            choices: {
                low: '低',
                medium: '中',
                high: '高',
            },
            defaultValue: 'medium',
        }),
        due_date: DateColumn({ label: '対応期限' }),
        estimated_amount: DecimalColumn({ label: '想定金額' }),
        assigned_parent: ReferenceColumn({
            label: '対応する保護者',
            referenceTable: 'sys_user',
        }),
        source_summary: MultiLineTextColumn({ label: '学校からの連絡内容' }),
        requested_action: MultiLineTextColumn({ label: '対応してほしいこと' }),
        parent_comment: MultiLineTextColumn({ label: '保護者コメント' }),
        internal_note: MultiLineTextColumn({ label: '検証メモ' }),
        attachment_required: BooleanColumn({ label: '添付必須' }),
        approval_required: BooleanColumn({ label: '承認必須' }),
    },
})

const TABLE = 'x_144721_family_ap_ui16_request'

export const ui16ViewRuleLabCategory = Record({
    $id: Now.ID['ui16_view_rule_lab_category'],
    table: 'sys_app_category',
    data: {
        name: 'family_ui16_view_rule_lab',
        style: 'border-color: #4f7dc9; background-color: #eaf2ff;',
    },
})

export const ui16ViewRuleLabMenu = ApplicationMenu({
    $id: Now.ID['ui16_view_rule_lab_menu'],
    title: 'UI16 View Rule 検証',
    hint: 'UI16 フォーム直接起票で View Rule を検証します。',
    description: 'Service Portal を使わず、UI16 のフォーム表示切り替えを検証するメニューです。',
    category: ui16ViewRuleLabCategory,
    active: true,
})

Record({
    $id: Now.ID['ui16_view_rule_lab_new_module'],
    table: 'sys_app_module',
    data: {
        title: '新規検証依頼',
        application: ui16ViewRuleLabMenu,
        link_type: 'NEW',
        name: TABLE,
        hint: 'UI16 の新規フォームから直接起票します。',
        active: true,
        order: 100,
    },
})

Record({
    $id: Now.ID['ui16_view_rule_lab_list_module'],
    table: 'sys_app_module',
    data: {
        title: '検証依頼一覧',
        application: ui16ViewRuleLabMenu,
        link_type: 'LIST',
        name: TABLE,
        hint: 'View Rule 検証依頼の一覧を開きます。',
        active: true,
        order: 200,
    },
})

export const ui16PurchaseView = Record({
    $id: Now.ID['ui16_purchase_view'],
    table: 'sys_ui_view',
    data: { name: 'x_144721_family_ap_purchase', title: 'Family UI16 Purchase View' },
})

export const ui16PaymentView = Record({
    $id: Now.ID['ui16_payment_view'],
    table: 'sys_ui_view',
    data: { name: 'x_144721_family_ap_payment', title: 'Family UI16 Payment View' },
})

export const ui16UrgentView = Record({
    $id: Now.ID['ui16_urgent_view'],
    table: 'sys_ui_view',
    data: { name: 'x_144721_family_ap_urgent', title: 'Family UI16 Urgent View' },
})

export const ui16HighCostPurchaseView = Record({
    $id: Now.ID['ui16_high_cost_purchase_view'],
    table: 'sys_ui_view',
    data: { name: 'x_144721_family_ap_high_cost_purchase', title: 'Family UI16 High Cost Purchase View' },
})


Form({
    table: TABLE,
    view: default_view,
    sections: [
        {
            caption: '基本情報',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'number', type: 'table_field' },
                        { field: 'short_description', type: 'table_field' },
                        { field: 'request_type', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'urgency_level', type: 'table_field' },
                        { field: 'state', type: 'table_field' },
                        { field: 'due_date', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'source_summary', type: 'table_field' },
                        { field: 'requested_action', type: 'table_field' },
                        { field: 'parent_comment', type: 'table_field' },
                    ],
                },
            ],
        },
    ],
})

Form({
    table: TABLE,
    view: ui16PurchaseView,
    sections: [
        {
            caption: '購入・準備依頼',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'number', type: 'table_field' },
                        { field: 'short_description', type: 'table_field' },
                        { field: 'estimated_amount', type: 'table_field' },
                        { field: 'attachment_required', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'request_type', type: 'table_field' },
                        { field: 'urgency_level', type: 'table_field' },
                        { field: 'due_date', type: 'table_field' },
                        { field: 'assigned_parent', type: 'table_field' },
                    ],
                },
                { layout: 'one-column', elements: [{ field: 'requested_action', type: 'table_field' }, { field: 'parent_comment', type: 'table_field' }] },
            ],
        },
    ],
})

Form({
    table: TABLE,
    view: ui16PaymentView,
    sections: [
        {
            caption: '支払い依頼',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'number', type: 'table_field' },
                        { field: 'short_description', type: 'table_field' },
                        { field: 'estimated_amount', type: 'table_field' },
                        { field: 'approval_required', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'request_type', type: 'table_field' },
                        { field: 'urgency_level', type: 'table_field' },
                        { field: 'due_date', type: 'table_field' },
                        { field: 'assigned_parent', type: 'table_field' },
                    ],
                },
                { layout: 'one-column', elements: [{ field: 'source_summary', type: 'table_field' }, { field: 'parent_comment', type: 'table_field' }] },
            ],
        },
    ],
})

Form({
    table: TABLE,
    view: ui16UrgentView,
    sections: [
        {
            caption: '緊急対応',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'number', type: 'table_field' },
                        { field: 'short_description', type: 'table_field' },
                        { field: 'request_type', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'urgency_level', type: 'table_field' },
                        { field: 'state', type: 'table_field' },
                        { field: 'due_date', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'requested_action', type: 'table_field' },
                        { field: 'parent_comment', type: 'table_field' },
                        { field: 'internal_note', type: 'table_field' },
                    ],
                },
            ],
        },
    ],
})

Form({
    table: TABLE,
    view: ui16HighCostPurchaseView,
    sections: [
        {
            caption: '高額購入レビュー',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        { field: 'number', type: 'table_field' },
                        { field: 'short_description', type: 'table_field' },
                        { field: 'estimated_amount', type: 'table_field' },
                        { field: 'approval_required', type: 'table_field' },
                    ],
                    rightElements: [
                        { field: 'request_type', type: 'table_field' },
                        { field: 'urgency_level', type: 'table_field' },
                        { field: 'due_date', type: 'table_field' },
                        { field: 'assigned_parent', type: 'table_field' },
                    ],
                },
                {
                    layout: 'one-column',
                    elements: [
                        { field: 'source_summary', type: 'table_field' },
                        { field: 'requested_action', type: 'table_field' },
                        { field: 'internal_note', type: 'table_field' },
                    ],
                },
            ],
        },
    ],
})

List({
    table: TABLE,
    view: default_view,
    columns: ['number', 'short_description', 'request_type', 'urgency_level', 'state', 'due_date', 'estimated_amount', 'assigned_parent'],
})

Record({
    $id: Now.ID['ui16_high_cost_purchase_view_rule'],
    table: 'sysrule_view',
    data: {
        name: 'UI16 高額購入 View Rule',
        table: TABLE,
        device_type: 'browser',
        advanced: true,
        active: true,
        overrides_user_preference: true,
        order: 10,
        script: `(function overrideView(view, is_list) {
    answer = null;
    if (is_list) {
        return;
    }

    var requestType = current.getValue('request_type') || '';
    var amount = parseFloat((current.getValue('estimated_amount') || '0').toString().replace(/,/g, ''));
    if (requestType === 'purchase' && !isNaN(amount) && amount >= 10000) {
        answer = 'x_144721_family_ap_high_cost_purchase';
    }
})(view, is_list);`,
    },
})

Record({
    $id: Now.ID['ui16_urgent_view_rule'],
    table: 'sysrule_view',
    data: {
        name: 'UI16 緊急 View Rule',
        table: TABLE,
        view: 'x_144721_family_ap_urgent',
        condition: 'urgency_level=high^EQ',
        device_type: 'browser',
        active: true,
        overrides_user_preference: true,
        order: 20,
    },
})

Record({
    $id: Now.ID['ui16_purchase_view_rule'],
    table: 'sysrule_view',
    data: {
        name: 'UI16 購入 View Rule',
        table: TABLE,
        view: 'x_144721_family_ap_purchase',
        condition: 'request_type=purchase^estimated_amount<10000^EQ',
        device_type: 'browser',
        active: true,
        overrides_user_preference: true,
        order: 30,
    },
})

Record({
    $id: Now.ID['ui16_payment_view_rule'],
    table: 'sysrule_view',
    data: {
        name: 'UI16 支払い View Rule',
        table: TABLE,
        view: 'x_144721_family_ap_payment',
        condition: 'request_type=payment^EQ',
        device_type: 'browser',
        active: true,
        overrides_user_preference: true,
        order: 40,
    },
})
