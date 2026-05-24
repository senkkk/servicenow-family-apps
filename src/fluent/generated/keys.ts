import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '05881790e991468b897a59c0d24860c5'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '501afd7d9f0a4681928b72a50c4ba1db'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: 'd8ea9ae97ede42558528ca30e8246ba1'
                    }
                    family_home_activity_container: {
                        table: 'sp_container'
                        id: '96c8bdfda0c34950a379deae620f37ba'
                    }
                    family_home_activity_row: {
                        table: 'sp_row'
                        id: '297f750a066b498083c9674c314ba148'
                    }
                    family_home_approvals_column: {
                        table: 'sp_column'
                        id: '22410e1e7de54f20b309a22fefcb9d7c'
                    }
                    family_home_approvals_instance: {
                        table: 'sp_instance'
                        id: 'c5df50f3f5a94f4cbc36295e5a0c56d5'
                    }
                    family_home_profile_column: {
                        table: 'sp_column'
                        id: '6f5e89e9425a4e6aa6d4db739d96dbec'
                    }
                    family_home_profile_instance: {
                        table: 'sp_instance'
                        id: '17ef0ca14cda41c5ae12fd5cfbfa0b19'
                    }
                    family_home_requests_column: {
                        table: 'sp_column'
                        id: '65478a58cd0345e192764f1fdf489b8a'
                    }
                    family_home_requests_instance: {
                        table: 'sp_instance'
                        id: '278793d4b58a417d98a5f5b391b8a1bf'
                    }
                    family_home_search_column: {
                        table: 'sp_column'
                        id: '8fa1c201832e4f06a7bb463f8171c8ff'
                    }
                    family_home_search_container: {
                        table: 'sp_container'
                        id: 'bacf6c29f88f4f10a383f8375ee09ebe'
                    }
                    family_home_search_instance: {
                        table: 'sp_instance'
                        id: 'f23cc0c27d494c369334b0238d667384'
                    }
                    family_home_search_row: {
                        table: 'sp_row'
                        id: 'b823cbeb923f4f1580f0ddc675237695'
                    }
                    family_portal: {
                        table: 'sp_portal'
                        id: '588c32b53ab34154808b5cf37c455855'
                    }
                    family_portal_main_menu: {
                        table: 'sp_instance_menu'
                        id: '9027989274614efd95f2c1120036b61f'
                    }
                    family_portal_menu_approvals: {
                        table: 'sp_rectangle_menu_item'
                        id: '42ce2731c612446f993082b388fe71df'
                    }
                    family_portal_menu_catalog: {
                        table: 'sp_rectangle_menu_item'
                        id: '61dfb53aab654a6b9bb2777b2a4ac37e'
                    }
                    family_portal_menu_home: {
                        table: 'sp_rectangle_menu_item'
                        id: '71c9083b4f4f4271b7dafe88e7f10187'
                    }
                    family_portal_menu_knowledge: {
                        table: 'sp_rectangle_menu_item'
                        id: '461cf11deef040e78436b2954166071b'
                    }
                    family_portal_menu_my_requests: {
                        table: 'sp_rectangle_menu_item'
                        id: 'd0f3d422536b4b7493f0d6a428cce22f'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'e32df436d6224a008e9dd718bac9bfa3'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '9ebc5e542c444d6db718dcd50d08687b'
                    }
                }
                composite: [
                    {
                        table: 'sp_page'
                        id: '6db96c9005a247628f8f34cbd5b7baeb'
                        key: {
                            id: 'family-home'
                        }
                    },
                ]
            }
        }
    }
}
