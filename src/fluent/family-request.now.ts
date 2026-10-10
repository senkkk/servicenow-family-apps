import '@servicenow/sdk/global'
import { BusinessRule, DateTimeColumn, Form, IntegerColumn, List, Record, ReferenceColumn, Table, default_view } from '@servicenow/sdk/core'

// Standalone base table: request-specific tables can extend this without inheriting Task.
export const x_144721_family_ap_request = Table({
    name: 'x_144721_family_ap_request',
    label: '家庭内申請',
    extensible: true,
    audit: true,
    schema: {
        state: IntegerColumn({
            label: 'ステータス',
            mandatory: true,
            default: '-1',
            dropdown: 'dropdown_without_none',
            choices: {
                '-1': { label: 'ドラフト', sequence: 100 },
                100: { label: 'クローズ', sequence: 200 },
                200: { label: 'キャンセル', sequence: 300 },
            },
        }),
        opened_by: ReferenceColumn({
            label: '記票者',
            referenceTable: 'sys_user',
            default: 'javascript:gs.getUserID();',
            readOnly: true,
        }),
        closed_at: DateTimeColumn({ label: 'クローズ日時', readOnly: true }),
        cancelled_at: DateTimeColumn({ label: 'キャンセル日時', readOnly: true }),
    },
})

const TABLE = 'x_144721_family_ap_request'

// Set the actual creator on insert, including requests submitted through an API.
BusinessRule({
    $id: Now.ID['family_request_set_creator'],
    name: '家庭内申請の記票者を設定',
    table: TABLE,
    active: true,
    when: 'before',
    action: ['insert'],
    order: 100,
    script: script`(function executeRule(current, previous) {
        current.setValue('opened_by', gs.getUserID());
    })(current, previous);`,
})

// Keep the latest entry time for each terminal state; ordinary edits preserve it.
BusinessRule({
    $id: Now.ID['family_request_set_terminal_timestamp'],
    name: '家庭内申請のクローズ・キャンセル日時を設定',
    table: TABLE,
    active: true,
    when: 'before',
    action: ['insert', 'update'],
    order: 200,
    script: script`(function executeRule(current, previous) {
        if (current.operation() !== 'insert' && !current.state.changes()) {
            return;
        }
        var state = current.getValue('state');
        if (state === '100') {
            current.setValue('closed_at', new GlideDateTime().getValue());
        } else if (state === '200') {
            current.setValue('cancelled_at', new GlideDateTime().getValue());
        }
    })(current, previous);`,
})

const processFlowFormatter = Record({
    $id: Now.ID['family_request_process_flow_formatter'],
    table: 'sys_ui_formatter',
    data: {
        name: '家庭内申請のステータス',
        type: 'formatter',
        formatter: 'process_flow.xml',
        table: TABLE,
        active: true,
    },
})

// Conditions highlight the current state; these records do not enforce transitions.
Record({
    $id: Now.ID['family_request_process_flow_draft'],
    table: 'sys_process_flow',
    data: {
        name: 'Family Request - Draft',
        label: 'ドラフト',
        table: TABLE,
        condition: 'state=-1^EQ',
        order: '100',
        active: true,
    },
})

Record({
    $id: Now.ID['family_request_process_flow_closed'],
    table: 'sys_process_flow',
    data: {
        name: 'Family Request - Closed',
        label: 'クローズ',
        table: TABLE,
        condition: 'state=100^EQ',
        order: '200',
        active: true,
    },
})

Record({
    $id: Now.ID['family_request_process_flow_cancelled'],
    table: 'sys_process_flow',
    data: {
        name: 'Family Request - Cancelled',
        label: 'キャンセル',
        table: TABLE,
        condition: 'state=200^EQ',
        order: '300',
        active: true,
    },
})

Form({
    table: TABLE,
    view: default_view,
    sections: [{
        caption: '家庭内申請',
        content: [
            {
                layout: 'one-column',
                elements: [{ type: 'formatter', formatterRef: processFlowFormatter }],
            },
            {
                layout: 'two-column',
                leftElements: [{ type: 'table_field', field: 'state' }],
                rightElements: [{ type: 'table_field', field: 'opened_by' }],
            },
            {
                layout: 'two-column',
                leftElements: [{ type: 'table_field', field: 'closed_at' }],
                rightElements: [{ type: 'table_field', field: 'cancelled_at' }],
            },
        ],
    }],
})

List({
    table: TABLE,
    view: default_view,
    columns: ['state', 'opened_by', 'closed_at', 'cancelled_at', 'sys_created_on'],
})
