import { Property } from '@servicenow/sdk/core'

export const parentResponseGroupPropertyName = 'x_144721_family_ap.parent_response_group'

export const parentResponseGroupProperty = Property({
    $id: Now.ID['parent_response_group_property'],
    name: parentResponseGroupPropertyName,
    $meta: { installMethod: 'first install' },
    type: 'string',
    value: '',
    description: '学校からの依頼を受け取る父親・母親ユーザーを含む sys_user_group の sys_id です。',
    roles: {
        read: ['admin'],
        write: ['admin'],
    },
})
