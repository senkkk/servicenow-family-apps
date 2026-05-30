import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    azure_openai_api_key_property: {
                        table: 'sys_properties'
                        id: '879642a2e005452ca2d665c7d66258ad'
                    }
                    azure_openai_deployment_property: {
                        table: 'sys_properties'
                        id: '1b018ee377324834b41a8ff79ae6ceb8'
                    }
                    azure_openai_endpoint_property: {
                        table: 'sys_properties'
                        id: 'f403ef0ec7b045478b19b37101f30df2'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: '05881790e991468b897a59c0d24860c5'
                    }
                    br0: {
                        table: 'sys_script'
                        id: '501afd7d9f0a4681928b72a50c4ba1db'
                    }
                    close_school_request_item: {
                        table: 'sys_hub_action_instance_v2'
                        id: '5923265574ed400cb67def814c1fdb6b'
                    }
                    create_parent_response_task: {
                        table: 'sys_hub_action_instance_v2'
                        id: '69b21eec53384d7a81955d31ce7ddb7d'
                    }
                    cs0: {
                        table: 'sys_script_client'
                        id: 'd8ea9ae97ede42558528ca30e8246ba1'
                    }
                    family_catalog: {
                        table: 'sc_catalog'
                        id: 'd8293035f1644bb8b454120fb8829aca'
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
                    family_portal_ai_assist_api: {
                        table: 'sys_ws_definition'
                        id: 'a2c7139c54974dd4979cbe20ec4b32c7'
                    }
                    family_portal_ai_assist_parse_route: {
                        table: 'sys_ws_operation'
                        id: 'a1e00c9ed7864f49a97e411c0081f823'
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
                    lookup_parent_response_group_property: {
                        table: 'sys_hub_action_instance_v2'
                        id: '13c6f1759b044965a7a788e355741fa5'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'e32df436d6224a008e9dd718bac9bfa3'
                    }
                    parent_response_group_property: {
                        table: 'sys_properties'
                        id: 'c04119f3d7344bc9a577f83e17a3f377'
                    }
                    school_request_catalog_item: {
                        table: 'sc_cat_item'
                        id: '0d2c04d8f9c14bc19802e40abf0bae34'
                    }
                    school_request_catalog_trigger: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: '66b7510fb5924851b17575fbebcbd9a6'
                    }
                    school_request_chat_assist_catalog_client_script: {
                        table: 'catalog_script_client'
                        id: '48266a374a50404491c584a9f8e2d241'
                    }
                    school_request_parent_fulfillment_flow: {
                        table: 'sys_hub_flow'
                        id: '66b7e034be624495948ec8d12f7c81f0'
                    }
                    school_requests_category: {
                        table: 'sc_category'
                        id: 'cf91d54e77004536a7335ca9cda42128'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '9ebc5e542c444d6db718dcd50d08687b'
                    }
                }
                composite: [
                    {
                        table: 'question_choice'
                        id: '03ded53976184b5fa46f294ef40f53cc'
                        key: {
                            question: {
                                id: 'd8d52d48362b4b4ba939f9dca029fc06'
                                key: {
                                    cat_item: '0d2c04d8f9c14bc19802e40abf0bae34'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'sign_or_submit'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '280897705be247df8f8023c027480c9a'
                        key: {
                            question: {
                                id: 'd8d52d48362b4b4ba939f9dca029fc06'
                                key: {
                                    cat_item: '0d2c04d8f9c14bc19802e40abf0bae34'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'payment'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '3b6e3515436c49baa436dda5bb514c1d'
                        key: {
                            sc_cat_item: '0d2c04d8f9c14bc19802e40abf0bae34'
                            sc_category: 'cf91d54e77004536a7335ca9cda42128'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '3bf41a9817cb42efbe2b59c889a84c53'
                        key: {
                            sc_cat_item: '0d2c04d8f9c14bc19802e40abf0bae34'
                            sc_catalog: 'd8293035f1644bb8b454120fb8829aca'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '689250d6f9394ca8be2c77e5daa930d6'
                        key: {
                            cat_item: '0d2c04d8f9c14bc19802e40abf0bae34'
                            variable_set: 'NULL'
                            name: 'request_title'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '6db96c9005a247628f8f34cbd5b7baeb'
                        key: {
                            id: 'family-home'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '78980af99eb44b07b767b71502925730'
                        key: {
                            cat_item: '0d2c04d8f9c14bc19802e40abf0bae34'
                            variable_set: 'NULL'
                            name: 'due_date'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '84b7e6eadb7748d3b99027fe63ef3d49'
                        deleted: true
                        key: {
                            cat_item: '0d2c04d8f9c14bc19802e40abf0bae34'
                            variable_set: 'NULL'
                            name: 'child_name'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '93d4ccf08ea3499b9af8802124d41626'
                        key: {
                            cat_item: '0d2c04d8f9c14bc19802e40abf0bae34'
                            variable_set: 'NULL'
                            name: 'requested_action'
                        }
                    },
                    {
                        table: 'm2m_sp_portal_catalog'
                        id: 'a30439759f724fb6a1c0e0168efd5f79'
                        key: {
                            sp_portal: '588c32b53ab34154808b5cf37c455855'
                            sc_catalog: 'd8293035f1644bb8b454120fb8829aca'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'acf60d57c61a4701a88235de9c8357a7'
                        key: {
                            question: {
                                id: 'd8d52d48362b4b4ba939f9dca029fc06'
                                key: {
                                    cat_item: '0d2c04d8f9c14bc19802e40abf0bae34'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'other'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'c472eea8b13b41b58f6654ee11d0d60d'
                        key: {
                            cat_item: '0d2c04d8f9c14bc19802e40abf0bae34'
                            variable_set: 'NULL'
                            name: 'source_summary'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'd0b40021cd1248fba0f95d7a80491a9c'
                        key: {
                            cat_item: '0d2c04d8f9c14bc19802e40abf0bae34'
                            variable_set: 'NULL'
                            name: 'notes'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'd8d52d48362b4b4ba939f9dca029fc06'
                        key: {
                            cat_item: '0d2c04d8f9c14bc19802e40abf0bae34'
                            variable_set: 'NULL'
                            name: 'request_type'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'da6d2f7258fb47fd887123add3b79291'
                        key: {
                            question: {
                                id: 'd8d52d48362b4b4ba939f9dca029fc06'
                                key: {
                                    cat_item: '0d2c04d8f9c14bc19802e40abf0bae34'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'purchase'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'f7d56cda2dbd43049396e57f7e9ef8d0'
                        deleted: true
                        key: {
                            cat_item: '0d2c04d8f9c14bc19802e40abf0bae34'
                            variable_set: 'NULL'
                            name: 'school_name'
                        }
                    },
                ]
            }
        }
    }
}
