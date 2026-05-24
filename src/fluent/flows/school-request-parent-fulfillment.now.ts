import { action, Flow, trigger, wfa } from '@servicenow/sdk/automation'
import { parentResponseGroupPropertyName } from '../properties/family-properties.now'

export const schoolRequestParentFulfillmentFlow = Flow(
    {
        $id: Now.ID['school_request_parent_fulfillment_flow'],
        name: '学校依頼の親対応フロー',
        description: '学校からの依頼に対して親対応タスクを作成し、タスク完了後に申請を完了します。',
        runAs: 'system',
        flowPriority: 'MEDIUM',
    },
    wfa.trigger(trigger.application.serviceCatalog, { $id: Now.ID['school_request_catalog_trigger'] }, {
        run_flow_in: 'background',
    }),
    (_params) => {
        const parentGroupProperty = wfa.action(
            action.core.lookUpRecord,
            { $id: Now.ID['lookup_parent_response_group_property'] },
            {
                table: 'sys_properties',
                conditions: `name=${parentResponseGroupPropertyName}`,
            }
        )

        wfa.action(
            action.core.createTask,
            { $id: Now.ID['create_parent_response_task'] },
            {
                task_table: 'sc_task',
                wait: true,
                field_values: TemplateValue({
                    request_item: wfa.dataPill(_params.trigger.request_item, 'reference'),
                    assignment_group: wfa.dataPill(parentGroupProperty.Record.value, 'reference'),
                    short_description: '学校からの依頼について親の対応が必要です',
                    description:
                        '申請内容と添付ファイルを確認してください。対応する場合は担当者を自分に設定し、子どもへの質問はコメントでやり取りしてください。対応が完了したらこのタスクを完了にしてください。',
                    state: '1',
                }),
            }
        )

        wfa.action(
            action.core.updateRecord,
            { $id: Now.ID['close_school_request_item'] },
            {
                table_name: 'sc_req_item',
                record: wfa.dataPill(_params.trigger.request_item, 'reference'),
                values: TemplateValue({
                    state: '3',
                    stage: 'complete',
                    comments: '親対応タスクが完了しました。',
                }),
            }
        )
    }
)
