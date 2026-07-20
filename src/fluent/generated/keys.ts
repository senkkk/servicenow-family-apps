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
                    azure_openai_api_version_property: {
                        table: 'sys_properties'
                        id: '251213d98b6644108b0956975dbccb0c'
                        deleted: true
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
                        deleted: true
                    }
                    family_home_profile_instance: {
                        table: 'sp_instance'
                        id: '17ef0ca14cda41c5ae12fd5cfbfa0b19'
                        deleted: true
                    }
                    family_home_recent_popular_column: {
                        table: 'sp_column'
                        id: '9dc418698e90465ea0823218c105ce43'
                    }
                    family_home_recent_popular_instance: {
                        table: 'sp_instance'
                        id: '7abf0e81497b42b4aa56797dd86b181b'
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
                    family_list_search_container: {
                        table: 'sp_container'
                        id: '957f6c37912645cda305e5d35e035cfa'
                    }
                    family_list_search_selector_column: {
                        table: 'sp_column'
                        id: '8fda821724814580b59b395673778b90'
                    }
                    family_list_search_selector_instance: {
                        table: 'sp_instance'
                        id: '806fc915af874423b8ee05f9912793ea'
                    }
                    family_list_search_selector_row: {
                        table: 'sp_row'
                        id: 'eacdd7b6429f4873993d641f827c4ef5'
                    }
                    family_list_search_table_column: {
                        table: 'sp_column'
                        id: 'e5bdb1c0010943f2ba9df08977f43cfd'
                    }
                    family_list_search_table_instance: {
                        table: 'sp_instance'
                        id: '58b233d012854371bd371bb217cfc582'
                    }
                    family_list_search_table_row: {
                        table: 'sp_row'
                        id: '38539cf6cc7a4f419afbc77f5f0fabc3'
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
                    family_portal_menu_list_search: {
                        table: 'sp_rectangle_menu_item'
                        id: '880801f335bd412bb6eeb0db76d15ff4'
                    }
                    family_portal_menu_my_requests: {
                        table: 'sp_rectangle_menu_item'
                        id: 'd0f3d422536b4b7493f0d6a428cce22f'
                    }
                    life_improvement_request_catalog_item: {
                        table: 'sc_cat_item'
                        id: 'ed9d3f0c1deb4b76bffecc2118963388'
                    }
                    life_improvement_requests_category: {
                        table: 'sc_category'
                        id: '8a2407dafa8140c6924af95efdb2492d'
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
                    school_request_chat_assist_widget: {
                        table: 'sp_widget'
                        id: '1f24ac4a2f7d48f1a6616c6e4b0d0a8b'
                    }
                    school_request_conversation_assist_catalog_client_script: {
                        table: 'catalog_script_client'
                        id: '81e7320d7d604ca68348188822b0b8e1'
                    }
                    school_request_conversation_assist_widget: {
                        table: 'sp_widget'
                        id: 'e2bcfa669c6342e7b8f54841aff8bdd3'
                    }
                    school_request_conversation_catalog_item: {
                        table: 'sc_cat_item'
                        id: 'c811a8f00b20461ea46bcfb70ff4a295'
                    }
                    school_request_file_assist_catalog_client_script: {
                        table: 'catalog_script_client'
                        id: 'c946d62499fb49fb9a826e8daeadda7b'
                    }
                    school_request_file_assist_widget: {
                        table: 'sp_widget'
                        id: '7c3cb847b0fe48e690ee071d279d4a52'
                    }
                    school_request_file_catalog_item: {
                        table: 'sc_cat_item'
                        id: '859d96b24a804111b63277e24ebee8ba'
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
                    table_list_results_widget: {
                        table: 'sp_widget'
                        id: '685474718e0842818ae693a6d84daddf'
                    }
                    table_list_selector_widget: {
                        table: 'sp_widget'
                        id: '397bb417d0ac482595d34213ead6571c'
                    }
                    ui16_high_cost_purchase_view_rule: {
                        table: 'sysrule_view'
                        id: '8a699a80ef534b7ea6dc7a7e6be5640c'
                    }
                    ui16_payment_view_rule: {
                        table: 'sysrule_view'
                        id: '03e2fe9b410b4b5e89af6346e2b12dc7'
                    }
                    ui16_purchase_view_rule: {
                        table: 'sysrule_view'
                        id: '811e6b345d3c49d3bb5fa62bfcd131da'
                    }
                    ui16_urgent_view_rule: {
                        table: 'sysrule_view'
                        id: '4d52773369844336a66e2cd437f7dfe0'
                    }
                    ui16_view_rule_lab_category: {
                        table: 'sys_app_category'
                        id: '0d9dcf83a40f49e780be523872879874'
                    }
                    ui16_view_rule_lab_list_module: {
                        table: 'sys_app_module'
                        id: 'd329d2957e2341d9bb95614c8f2e9e09'
                    }
                    ui16_view_rule_lab_menu: {
                        table: 'sys_app_application'
                        id: '4c9af062c3e845fb9224f82d592f5c8d'
                    }
                    ui16_view_rule_lab_new_module: {
                        table: 'sys_app_module'
                        id: '73f6c4cba18b462fbad7b886e40a0ed5'
                    }
                }
                composite: [
                    {
                        table: 'sys_ui_element'
                        id: '0303c52d119847a58267510692397694'
                        key: {
                            sys_ui_section: {
                                id: '60e74693cdde45eb803130b942fde01d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '購入・準備依頼'
                                    view: {
                                        id: 'a199fbdd57174b39a8f920378d6ce41b'
                                        key: {
                                            name: 'x_144721_family_ap_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '03c170d931944a1da5e612e5485696f1'
                        key: {
                            sys_ui_form: {
                                id: '824b4fdca29f408e997499fa4d354170'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    view: {
                                        id: '3e502670086e49e9b02b5f82225dace3'
                                        key: {
                                            name: 'x_144721_family_ap_high_cost_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '5956ace4691341aaa0be866d03b5e465'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '高額購入レビュー'
                                    view: {
                                        id: '3e502670086e49e9b02b5f82225dace3'
                                        key: {
                                            name: 'x_144721_family_ap_high_cost_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
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
                        id: '0401696ee50049e8ba9967c4fe77e1a5'
                        key: {
                            question: {
                                id: '140c386514de423cb36f1849055f807c'
                                key: {
                                    cat_item: '859d96b24a804111b63277e24ebee8ba'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'payment'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '04897fb731804fbfa0ddc03f52981dc6'
                        key: {
                            sys_ui_section: {
                                id: '72399e0ee78245daa9c963dbad7b6e9a'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '基本情報'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requested_action'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '048ad140858e4afbadfab77bc8be8711'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'urgency_level'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0577fbb789e9459791ed5a88a2bf68a0'
                        key: {
                            sys_ui_section: {
                                id: 'd2fc8e643ec24846a075d31bcdb8c80d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '支払い依頼'
                                    view: {
                                        id: 'a00c05a781a7483eb2fc41b1e8b502cb'
                                        key: {
                                            name: 'x_144721_family_ap_payment'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '05ccdf77fa524fe593440500d6666856'
                        key: {
                            question: {
                                id: 'ac42b52b868a4aeaa5a30c8f34decbff'
                                key: {
                                    cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                                    variable_set: 'NULL'
                                    name: 'improvement_area'
                                }
                            }
                            value: 'allowance'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '06061f6f327a496289387a1fafe38086'
                        key: {
                            question: {
                                id: '140c386514de423cb36f1849055f807c'
                                key: {
                                    cat_item: '859d96b24a804111b63277e24ebee8ba'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'sign_or_submit'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '07a1578cfc5e4cef9f547a7cc08e6f09'
                        key: {
                            question: {
                                id: '140c386514de423cb36f1849055f807c'
                                key: {
                                    cat_item: '859d96b24a804111b63277e24ebee8ba'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'purchase'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '093ec34795f1463999ee6721945a7cea'
                        key: {
                            cat_item: 'c811a8f00b20461ea46bcfb70ff4a295'
                            variable_set: 'NULL'
                            name: 'request_title'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0e1e11681b9c4b8483df7af7d32b41ed'
                        key: {
                            sys_ui_section: {
                                id: '5956ace4691341aaa0be866d03b5e465'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '高額購入レビュー'
                                    view: {
                                        id: '3e502670086e49e9b02b5f82225dace3'
                                        key: {
                                            name: 'x_144721_family_ap_high_cost_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'request_type'
                            position: '6'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '0ea7e74c1d3e4a09aeaa4f2229801dcc'
                        key: {
                            cat_item: 'c811a8f00b20461ea46bcfb70ff4a295'
                            variable_set: 'NULL'
                            name: 'notes'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0f949b6bb1ad470d8b887ec41a0f00ce'
                        key: {
                            sys_ui_section: {
                                id: '5956ace4691341aaa0be866d03b5e465'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '高額購入レビュー'
                                    view: {
                                        id: '3e502670086e49e9b02b5f82225dace3'
                                        key: {
                                            name: 'x_144721_family_ap_high_cost_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_parent'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '10f3f88ec101459fbb3d1627efda596e'
                        key: {
                            sys_ui_section: {
                                id: '3317623fc1974d3bb8105e270b78c77e'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '緊急対応'
                                    view: {
                                        id: 'af592cbc42104755b0bd6df13c11a84d'
                                        key: {
                                            name: 'x_144721_family_ap_urgent'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '6'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '1181518801274f7590bb93f217c447df'
                        key: {
                            sc_cat_item: '859d96b24a804111b63277e24ebee8ba'
                            sc_catalog: 'd8293035f1644bb8b454120fb8829aca'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '140c386514de423cb36f1849055f807c'
                        key: {
                            cat_item: '859d96b24a804111b63277e24ebee8ba'
                            variable_set: 'NULL'
                            name: 'request_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '167f07eba03f4160b94784d72c0faa9f'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'approval_required'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '16b9c905c83a4862ba43a5235d72b747'
                        key: {
                            sys_ui_section: {
                                id: '72399e0ee78245daa9c963dbad7b6e9a'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '基本情報'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '18561a169dba4c45899f53317fd8e9f6'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '19e24226def64158ab08aa4ee6d0261a'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'estimated_amount'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1ac06a142e35404184e7676f511af9e1'
                        key: {
                            sys_ui_section: {
                                id: 'd2fc8e643ec24846a075d31bcdb8c80d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '支払い依頼'
                                    view: {
                                        id: 'a00c05a781a7483eb2fc41b1e8b502cb'
                                        key: {
                                            name: 'x_144721_family_ap_payment'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'estimated_amount'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1b668b7e264847bca7ec887c29d41f65'
                        key: {
                            sys_ui_section: {
                                id: '60e74693cdde45eb803130b942fde01d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '購入・準備依頼'
                                    view: {
                                        id: 'a199fbdd57174b39a8f920378d6ce41b'
                                        key: {
                                            name: 'x_144721_family_ap_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '1d5e2e68ef2e496e88dd231f53929009'
                        key: {
                            cat_item: 'c811a8f00b20461ea46bcfb70ff4a295'
                            variable_set: 'NULL'
                            name: 'source_summary'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '216bc963bc3f4664aead2f6322164931'
                        key: {
                            list_id: {
                                id: '6d037805a67945e2a6572ee0fdb0a7f0'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'assigned_parent'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '21db5eeedad74d1ebe5457c29352ca2a'
                        key: {
                            question: {
                                id: 'b2325dce569643469627772af8f2af0e'
                                key: {
                                    cat_item: 'c811a8f00b20461ea46bcfb70ff4a295'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'purchase'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '25eeea39807440feb27c70fc879066e2'
                        key: {
                            sys_ui_section: {
                                id: '3317623fc1974d3bb8105e270b78c77e'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '緊急対応'
                                    view: {
                                        id: 'af592cbc42104755b0bd6df13c11a84d'
                                        key: {
                                            name: 'x_144721_family_ap_urgent'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requested_action'
                            position: '9'
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
                        table: 'sys_ui_element'
                        id: '2939beb9cb8b441191e3d8eda9dde90d'
                        key: {
                            sys_ui_section: {
                                id: '5956ace4691341aaa0be866d03b5e465'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '高額購入レビュー'
                                    view: {
                                        id: '3e502670086e49e9b02b5f82225dace3'
                                        key: {
                                            name: 'x_144721_family_ap_high_cost_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '29ebb29641b84b93a22822af5dc1c350'
                        key: {
                            sys_ui_section: {
                                id: '5956ace4691341aaa0be866d03b5e465'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '高額購入レビュー'
                                    view: {
                                        id: '3e502670086e49e9b02b5f82225dace3'
                                        key: {
                                            name: 'x_144721_family_ap_high_cost_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'urgency_level'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2a23eaf8bffd4634845dbaa733697bf3'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'request_type'
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2a832a7f43da4e67b1179e301ede87a7'
                        key: {
                            sys_ui_section: {
                                id: 'd2fc8e643ec24846a075d31bcdb8c80d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '支払い依頼'
                                    view: {
                                        id: 'a00c05a781a7483eb2fc41b1e8b502cb'
                                        key: {
                                            name: 'x_144721_family_ap_payment'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2aa12eed84d844c182ab06dff1693ebe'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'urgency_level'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2c54cc0dd54946ceb5fe88309335a883'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'assigned_parent'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '2ce73de645374ac697d0e2778a8a4af5'
                        key: {
                            list_id: {
                                id: '6d037805a67945e2a6572ee0fdb0a7f0'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'estimated_amount'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '2ec537666e834b209d829215e6b772a7'
                        key: {
                            question: {
                                id: 'ac42b52b868a4aeaa5a30c8f34decbff'
                                key: {
                                    cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                                    variable_set: 'NULL'
                                    name: 'improvement_area'
                                }
                            }
                            value: 'cleaning'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '301d1132b3164b758a2b5a1205256c76'
                        key: {
                            cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                            variable_set: 'NULL'
                            name: 'expected_benefit'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '3098c1aef7a746fdb31db88cbdeb6077'
                        key: {
                            cat_item: 'c811a8f00b20461ea46bcfb70ff4a295'
                            variable_set: 'NULL'
                            name: 'requested_action'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '3317623fc1974d3bb8105e270b78c77e'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            caption: '緊急対応'
                            view: {
                                id: 'af592cbc42104755b0bd6df13c11a84d'
                                key: {
                                    name: 'x_144721_family_ap_urgent'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '341933ba2a334e0f90b6e5c030a3b874'
                        key: {
                            sys_ui_section: {
                                id: '5956ace4691341aaa0be866d03b5e465'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '高額購入レビュー'
                                    view: {
                                        id: '3e502670086e49e9b02b5f82225dace3'
                                        key: {
                                            name: 'x_144721_family_ap_high_cost_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '343ea98d596a459ba0b99a988d394ec0'
                        key: {
                            cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                            variable_set: 'NULL'
                            name: 'proposal_title'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3478557f7b7343e4906238425a9dea2a'
                        key: {
                            sys_ui_section: {
                                id: '60e74693cdde45eb803130b942fde01d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '購入・準備依頼'
                                    view: {
                                        id: 'a199fbdd57174b39a8f920378d6ce41b'
                                        key: {
                                            name: 'x_144721_family_ap_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'urgency_level'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '35b5d0f1e4f94307ae2f457fcd077893'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'requested_action'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3930177806fb45dc85e7ee82f52f21e3'
                        key: {
                            sys_ui_section: {
                                id: '60e74693cdde45eb803130b942fde01d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '購入・準備依頼'
                                    view: {
                                        id: 'a199fbdd57174b39a8f920378d6ce41b'
                                        key: {
                                            name: 'x_144721_family_ap_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'attachment_required'
                            position: '4'
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
                        table: 'sys_ui_element'
                        id: '3b78c4ed2db24fb1bc0160ecc8e3f501'
                        key: {
                            sys_ui_section: {
                                id: '5956ace4691341aaa0be866d03b5e465'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '高額購入レビュー'
                                    view: {
                                        id: '3e502670086e49e9b02b5f82225dace3'
                                        key: {
                                            name: 'x_144721_family_ap_high_cost_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requested_action'
                            position: '12'
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
                        table: 'sys_ui_view'
                        id: '3e502670086e49e9b02b5f82225dace3'
                        key: {
                            name: 'x_144721_family_ap_high_cost_purchase'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '4675552354d746edabd2f244b90be419'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'request_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '469a50017f444d718b5b3893cd56681a'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'due_date'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '487935d9bb944c3287d6752f038247ba'
                        key: {
                            sys_ui_section: {
                                id: 'd2fc8e643ec24846a075d31bcdb8c80d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '支払い依頼'
                                    view: {
                                        id: 'a00c05a781a7483eb2fc41b1e8b502cb'
                                        key: {
                                            name: 'x_144721_family_ap_payment'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approval_required'
                            position: '4'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '48d20ec460d74ba798a1b1b369ea2435'
                        key: {
                            cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                            variable_set: 'NULL'
                            name: 'discussion_deadline'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '49a9cbcc22b64b0bb04006ec80f91e93'
                        key: {
                            list_id: {
                                id: '6d037805a67945e2a6572ee0fdb0a7f0'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '4ddc35841868492cb14db19b5904bd53'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            view: {
                                id: 'af592cbc42104755b0bd6df13c11a84d'
                                key: {
                                    name: 'x_144721_family_ap_urgent'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: '527d9858db7f487faa4f4cf693e89c23'
                        key: {
                            list_id: {
                                id: '6d037805a67945e2a6572ee0fdb0a7f0'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '550cd2297dba4bbd8805e2ebb1e913af'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'source_summary'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '563cb46abe4c4fa4bc748869436c2c9f'
                        key: {
                            sys_ui_section: {
                                id: '72399e0ee78245daa9c963dbad7b6e9a'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '基本情報'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'source_summary'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '574ad198cd8b47e2a6e323d65484721f'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'urgency_level'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '5786d33c5ed942d8bf9ffc262eeee279'
                        key: {
                            question: {
                                id: '140c386514de423cb36f1849055f807c'
                                key: {
                                    cat_item: '859d96b24a804111b63277e24ebee8ba'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5885cd38b3c3431a850b1617ae4ac71b'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'urgency_level'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: '5896632dc63a49fc84295191690a9600'
                        key: {
                            sc_cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                            sc_category: '8a2407dafa8140c6924af95efdb2492d'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '59012da74dca462c87cbbf9dd1915904'
                        key: {
                            sys_ui_form: {
                                id: '4ddc35841868492cb14db19b5904bd53'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    view: {
                                        id: 'af592cbc42104755b0bd6df13c11a84d'
                                        key: {
                                            name: 'x_144721_family_ap_urgent'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '3317623fc1974d3bb8105e270b78c77e'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '緊急対応'
                                    view: {
                                        id: 'af592cbc42104755b0bd6df13c11a84d'
                                        key: {
                                            name: 'x_144721_family_ap_urgent'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '5956ace4691341aaa0be866d03b5e465'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            caption: '高額購入レビュー'
                            view: {
                                id: '3e502670086e49e9b02b5f82225dace3'
                                key: {
                                    name: 'x_144721_family_ap_high_cost_purchase'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sp_page'
                        id: '5b443f70371843eabbb0cc5154090052'
                        key: {
                            id: 'family-list-search'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5bc01fd2c7d64e58a3dd3e3b98ca88a2'
                        key: {
                            sys_ui_section: {
                                id: '72399e0ee78245daa9c963dbad7b6e9a'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '基本情報'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'urgency_level'
                            position: '5'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '5c0bdc13a0d241bf93f1dd2e677eab6d'
                        key: {
                            sc_cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                            sc_catalog: 'd8293035f1644bb8b454120fb8829aca'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '5dd11c1d422e4fa9920cd98e6cd4cc89'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'estimated_amount'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '60e74693cdde45eb803130b942fde01d'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            caption: '購入・準備依頼'
                            view: {
                                id: 'a199fbdd57174b39a8f920378d6ce41b'
                                key: {
                                    name: 'x_144721_family_ap_purchase'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '611da6aa141742818cd26e150fd7c382'
                        key: {
                            question: {
                                id: 'ac42b52b868a4aeaa5a30c8f34decbff'
                                key: {
                                    cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                                    variable_set: 'NULL'
                                    name: 'improvement_area'
                                }
                            }
                            value: 'rule'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '630fddfd57854cbcbac27cd1c9e1033f'
                        key: {
                            cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                            variable_set: 'NULL'
                            name: 'proposed_change'
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
                        table: 'sys_ui_element'
                        id: '68fc0d3cef2c42d29bf80e64d317769d'
                        key: {
                            sys_ui_section: {
                                id: 'd2fc8e643ec24846a075d31bcdb8c80d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '支払い依頼'
                                    view: {
                                        id: 'a00c05a781a7483eb2fc41b1e8b502cb'
                                        key: {
                                            name: 'x_144721_family_ap_payment'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'due_date'
                            position: '8'
                        }
                    },
                    {
                        table: 'sc_cat_item_catalog'
                        id: '69d606ad2cda402aac30aa1e1a4e7426'
                        key: {
                            sc_cat_item: 'c811a8f00b20461ea46bcfb70ff4a295'
                            sc_catalog: 'd8293035f1644bb8b454120fb8829aca'
                        }
                    },
                    {
                        table: 'sys_ui_list'
                        id: '6d037805a67945e2a6572ee0fdb0a7f0'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                            element: 'NULL'
                            relationship: 'NULL'
                            parent: 'NULL'
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
                        table: 'sys_ui_element'
                        id: '6f066ecf5aa84696b1049f060aa70309'
                        key: {
                            sys_ui_section: {
                                id: '60e74693cdde45eb803130b942fde01d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '購入・準備依頼'
                                    view: {
                                        id: 'a199fbdd57174b39a8f920378d6ce41b'
                                        key: {
                                            name: 'x_144721_family_ap_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'request_type'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '70c3ddd88fa24895aee04e4d8a4efbc5'
                        key: {
                            sys_ui_section: {
                                id: '3317623fc1974d3bb8105e270b78c77e'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '緊急対応'
                                    view: {
                                        id: 'af592cbc42104755b0bd6df13c11a84d'
                                        key: {
                                            name: 'x_144721_family_ap_urgent'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '72399e0ee78245daa9c963dbad7b6e9a'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            caption: '基本情報'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '7257935f7b3b4f2dab76a30bbbf62fc1'
                        key: {
                            cat_item: '859d96b24a804111b63277e24ebee8ba'
                            variable_set: 'NULL'
                            name: 'requested_action'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '7324f07e9c874b458778a094869e4fde'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'requested_action'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '741774a896394be981bbeca53a5222e4'
                        key: {
                            sys_ui_section: {
                                id: '60e74693cdde45eb803130b942fde01d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '購入・準備依頼'
                                    view: {
                                        id: 'a199fbdd57174b39a8f920378d6ce41b'
                                        key: {
                                            name: 'x_144721_family_ap_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '2'
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
                        table: 'sys_number'
                        id: '7b55297713464a1bb0d4d873c5c1ee1a'
                        key: {
                            category: 'x_144721_family_ap_ui16_request'
                            prefix: 'UVR'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '7b96a95267754efc94e559ec8691b918'
                        key: {
                            cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                            variable_set: 'NULL'
                            name: 'current_issue'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7bbc73e28a794fa9b1084844ecd1211e'
                        key: {
                            sys_ui_section: {
                                id: '3317623fc1974d3bb8105e270b78c77e'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '緊急対応'
                                    view: {
                                        id: 'af592cbc42104755b0bd6df13c11a84d'
                                        key: {
                                            name: 'x_144721_family_ap_urgent'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'urgency_level'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7c202283d60f427198af2953e5d657a6'
                        key: {
                            sys_ui_section: {
                                id: 'd2fc8e643ec24846a075d31bcdb8c80d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '支払い依頼'
                                    view: {
                                        id: 'a00c05a781a7483eb2fc41b1e8b502cb'
                                        key: {
                                            name: 'x_144721_family_ap_payment'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7d8dcc3c6f5d4e319abaf9ff4a47f8bf'
                        key: {
                            sys_ui_section: {
                                id: '72399e0ee78245daa9c963dbad7b6e9a'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '基本情報'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '802ee4f7e9d640f48c5504bca3ff12d0'
                        key: {
                            sys_ui_section: {
                                id: '72399e0ee78245daa9c963dbad7b6e9a'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '基本情報'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'parent_comment'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '81ba9c36ed8e484cab5d07977d4b019b'
                        key: {
                            sys_ui_form: {
                                id: 'f7f4e8a8e06549edbb48877dfd381863'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    view: {
                                        id: 'a199fbdd57174b39a8f920378d6ce41b'
                                        key: {
                                            name: 'x_144721_family_ap_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '60e74693cdde45eb803130b942fde01d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '購入・準備依頼'
                                    view: {
                                        id: 'a199fbdd57174b39a8f920378d6ce41b'
                                        key: {
                                            name: 'x_144721_family_ap_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '824b4fdca29f408e997499fa4d354170'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            view: {
                                id: '3e502670086e49e9b02b5f82225dace3'
                                key: {
                                    name: 'x_144721_family_ap_high_cost_purchase'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '83546b99f2234e2e88e42d30668bc27c'
                        key: {
                            sys_ui_section: {
                                id: 'd2fc8e643ec24846a075d31bcdb8c80d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '支払い依頼'
                                    view: {
                                        id: 'a00c05a781a7483eb2fc41b1e8b502cb'
                                        key: {
                                            name: 'x_144721_family_ap_payment'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'parent_comment'
                            position: '12'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '84028a2e8fbc409684a604104f283756'
                        key: {
                            cat_item: '859d96b24a804111b63277e24ebee8ba'
                            variable_set: 'NULL'
                            name: 'notes'
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
                        table: 'question_choice'
                        id: '85422de240884a71ac693068e8944bd3'
                        key: {
                            question: {
                                id: 'ac42b52b868a4aeaa5a30c8f34decbff'
                                key: {
                                    cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                                    variable_set: 'NULL'
                                    name: 'improvement_area'
                                }
                            }
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8777935c9b7441c4960daa366f81fbd1'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'internal_note'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8791907a646e4221833a5fbe37b4f8e3'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'parent_comment'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '8d1248d1efa64d148f52529f7542c5ca'
                        key: {
                            question: {
                                id: 'ac42b52b868a4aeaa5a30c8f34decbff'
                                key: {
                                    cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                                    variable_set: 'NULL'
                                    name: 'improvement_area'
                                }
                            }
                            value: 'chores'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: '8e606a0fc1694e8ebb302306508b8f9a'
                        key: {
                            cat_item: '859d96b24a804111b63277e24ebee8ba'
                            variable_set: 'NULL'
                            name: 'source_summary'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8edddb17390544559c45a39b12a5b8e7'
                        key: {
                            sys_ui_section: {
                                id: '3317623fc1974d3bb8105e270b78c77e'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '緊急対応'
                                    view: {
                                        id: 'af592cbc42104755b0bd6df13c11a84d'
                                        key: {
                                            name: 'x_144721_family_ap_urgent'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8ef1a5714ec94f1da26ede7016ee0c05'
                        key: {
                            sys_ui_section: {
                                id: '72399e0ee78245daa9c963dbad7b6e9a'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '基本情報'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'request_type'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9104af5347a446929e7e302bc23fb5dc'
                        key: {
                            sys_ui_section: {
                                id: '5956ace4691341aaa0be866d03b5e465'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '高額購入レビュー'
                                    view: {
                                        id: '3e502670086e49e9b02b5f82225dace3'
                                        key: {
                                            name: 'x_144721_family_ap_high_cost_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'internal_note'
                            position: '13'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '91be18b2269b490c9d4caa15400c6464'
                        key: {
                            sys_ui_section: {
                                id: '3317623fc1974d3bb8105e270b78c77e'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '緊急対応'
                                    view: {
                                        id: 'af592cbc42104755b0bd6df13c11a84d'
                                        key: {
                                            name: 'x_144721_family_ap_urgent'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9339eb011e4245b9b47b3d60cdb106b5'
                        key: {
                            sys_ui_section: {
                                id: '5956ace4691341aaa0be866d03b5e465'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '高額購入レビュー'
                                    view: {
                                        id: '3e502670086e49e9b02b5f82225dace3'
                                        key: {
                                            name: 'x_144721_family_ap_high_cost_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'source_summary'
                            position: '11'
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
                        table: 'sys_ui_element'
                        id: '947a9ec6620f4b5a9b5649717010dcf8'
                        key: {
                            sys_ui_section: {
                                id: '3317623fc1974d3bb8105e270b78c77e'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '緊急対応'
                                    view: {
                                        id: 'af592cbc42104755b0bd6df13c11a84d'
                                        key: {
                                            name: 'x_144721_family_ap_urgent'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'parent_comment'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '98d559a1debc4b59881804da969ccfbb'
                        key: {
                            sys_ui_form: {
                                id: '9bb59b4c2fac47538884a93236ecf4bf'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    view: {
                                        id: 'a00c05a781a7483eb2fc41b1e8b502cb'
                                        key: {
                                            name: 'x_144721_family_ap_payment'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'd2fc8e643ec24846a075d31bcdb8c80d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '支払い依頼'
                                    view: {
                                        id: 'a00c05a781a7483eb2fc41b1e8b502cb'
                                        key: {
                                            name: 'x_144721_family_ap_payment'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '99dff75d1c3244d08dc2805c69ddb641'
                        key: {
                            sys_ui_section: {
                                id: '5956ace4691341aaa0be866d03b5e465'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '高額購入レビュー'
                                    view: {
                                        id: '3e502670086e49e9b02b5f82225dace3'
                                        key: {
                                            name: 'x_144721_family_ap_high_cost_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'approval_required'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '9a392a8af3ee485b8516e1070f756953'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '9ab29a20650a4d54918145212fff6c1e'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'due_date'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '9bb59b4c2fac47538884a93236ecf4bf'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            view: {
                                id: 'a00c05a781a7483eb2fc41b1e8b502cb'
                                key: {
                                    name: 'x_144721_family_ap_payment'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9c9ecbe5cf284a32a637a7dba1e71330'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'request_type'
                            value: 'sign_or_submit'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9f33b769263a4d9886f8e9d4eb5b7ab5'
                        key: {
                            sys_ui_section: {
                                id: '60e74693cdde45eb803130b942fde01d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '購入・準備依頼'
                                    view: {
                                        id: 'a199fbdd57174b39a8f920378d6ce41b'
                                        key: {
                                            name: 'x_144721_family_ap_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'estimated_amount'
                            position: '3'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: '9f891d8f8b51499683d3db1a52d44269'
                        key: {
                            question: {
                                id: 'b2325dce569643469627772af8f2af0e'
                                key: {
                                    cat_item: 'c811a8f00b20461ea46bcfb70ff4a295'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'sign_or_submit'
                        }
                    },
                    {
                        table: 'sys_ui_view'
                        id: 'a00c05a781a7483eb2fc41b1e8b502cb'
                        key: {
                            name: 'x_144721_family_ap_payment'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: 'a1258ca3c49f48bf874f8fc0b21647d5'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                        }
                    },
                    {
                        table: 'sys_ui_view'
                        id: 'a199fbdd57174b39a8f920378d6ce41b'
                        key: {
                            name: 'x_144721_family_ap_purchase'
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
                        table: 'sys_ui_element'
                        id: 'a3d40062e34942fb85e65a2ebddff291'
                        key: {
                            sys_ui_section: {
                                id: '60e74693cdde45eb803130b942fde01d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '購入・準備依頼'
                                    view: {
                                        id: 'a199fbdd57174b39a8f920378d6ce41b'
                                        key: {
                                            name: 'x_144721_family_ap_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'requested_action'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a5e99a5068514d55a34fd8fab2c42868'
                        key: {
                            sys_ui_section: {
                                id: '72399e0ee78245daa9c963dbad7b6e9a'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '基本情報'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a86430c2fe6949dc947105108b48fac9'
                        key: {
                            sys_ui_section: {
                                id: '3317623fc1974d3bb8105e270b78c77e'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '緊急対応'
                                    view: {
                                        id: 'af592cbc42104755b0bd6df13c11a84d'
                                        key: {
                                            name: 'x_144721_family_ap_urgent'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a8c9c6bec2e0421c99ade489b1a3cc36'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a912d1eaa6a44bd8951386483d8826b6'
                        key: {
                            sys_ui_section: {
                                id: '3317623fc1974d3bb8105e270b78c77e'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '緊急対応'
                                    view: {
                                        id: 'af592cbc42104755b0bd6df13c11a84d'
                                        key: {
                                            name: 'x_144721_family_ap_urgent'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'request_type'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aa3a94975273418fb007e9dedd96ae70'
                        key: {
                            sys_ui_section: {
                                id: '5956ace4691341aaa0be866d03b5e465'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '高額購入レビュー'
                                    view: {
                                        id: '3e502670086e49e9b02b5f82225dace3'
                                        key: {
                                            name: 'x_144721_family_ap_high_cost_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'estimated_amount'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ab0bca2436214e8da90da6aa2b539e8d'
                        key: {
                            sys_ui_section: {
                                id: '60e74693cdde45eb803130b942fde01d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '購入・準備依頼'
                                    view: {
                                        id: 'a199fbdd57174b39a8f920378d6ce41b'
                                        key: {
                                            name: 'x_144721_family_ap_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'parent_comment'
                            position: '12'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'ac42b52b868a4aeaa5a30c8f34decbff'
                        key: {
                            cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                            variable_set: 'NULL'
                            name: 'improvement_area'
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
                        table: 'sys_ui_element'
                        id: 'ad70f8ae141d4520949749f929193e1c'
                        key: {
                            sys_ui_section: {
                                id: '5956ace4691341aaa0be866d03b5e465'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '高額購入レビュー'
                                    view: {
                                        id: '3e502670086e49e9b02b5f82225dace3'
                                        key: {
                                            name: 'x_144721_family_ap_high_cost_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_view'
                        id: 'af592cbc42104755b0bd6df13c11a84d'
                        key: {
                            name: 'x_144721_family_ap_urgent'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b019deb4ba004f469eda2c248868f89d'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'request_type'
                            value: 'payment'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'b127fd3b1f5e40fbac966e9891bdb7f8'
                        key: {
                            cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                            variable_set: 'NULL'
                            name: 'notes'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b2081d8c2f9842309afd830d191154c0'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'assigned_parent'
                            language: 'en'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'b2325dce569643469627772af8f2af0e'
                        key: {
                            cat_item: 'c811a8f00b20461ea46bcfb70ff4a295'
                            variable_set: 'NULL'
                            name: 'request_type'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b3597c35e9d24b588baa382efcd2f910'
                        key: {
                            sys_ui_section: {
                                id: '5956ace4691341aaa0be866d03b5e465'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '高額購入レビュー'
                                    view: {
                                        id: '3e502670086e49e9b02b5f82225dace3'
                                        key: {
                                            name: 'x_144721_family_ap_high_cost_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b5662397f7464b5a9d910e6a1441d162'
                        key: {
                            sys_ui_section: {
                                id: '72399e0ee78245daa9c963dbad7b6e9a'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '基本情報'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: 'b66faaabbb644e9dbb43062a004c188f'
                        key: {
                            sc_cat_item: '859d96b24a804111b63277e24ebee8ba'
                            sc_category: 'cf91d54e77004536a7335ca9cda42128'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'b795216740664b87993a6a475ab6991e'
                        key: {
                            list_id: {
                                id: '6d037805a67945e2a6572ee0fdb0a7f0'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'request_type'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b7cc4c8b20aa491aa231c277e0f6cb92'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'request_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'b7ef093466bd4ff1a6b47ee7baf5a75b'
                        key: {
                            list_id: {
                                id: '6d037805a67945e2a6572ee0fdb0a7f0'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b81641b348e1434ebc5fde88ca851b11'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'request_type'
                            value: 'purchase'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b8684aed9fcd4bbc90f68666b8c4ee0e'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'approval_required'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'b933509766574d5c820ed9613cab2dc7'
                        key: {
                            cat_item: '859d96b24a804111b63277e24ebee8ba'
                            variable_set: 'NULL'
                            name: 'request_title'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ba0b3b0eac5143e1bad855c29fbd128f'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'attachment_required'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bcd5d4cb908e4c90ade87fdf87225365'
                        key: {
                            sys_ui_section: {
                                id: 'd2fc8e643ec24846a075d31bcdb8c80d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '支払い依頼'
                                    view: {
                                        id: 'a00c05a781a7483eb2fc41b1e8b502cb'
                                        key: {
                                            name: 'x_144721_family_ap_payment'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'request_type'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'bdb8c0093a8a4bc9b737c338af724b86'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'urgency_level'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'bf99c5b4223f4b9886b1055d2a4b66c8'
                        key: {
                            sys_ui_form: {
                                id: '18561a169dba4c45899f53317fd8e9f6'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '72399e0ee78245daa9c963dbad7b6e9a'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '基本情報'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c031efbcf2b64158af4ea5e8d732bf0f'
                        key: {
                            sys_ui_section: {
                                id: '3317623fc1974d3bb8105e270b78c77e'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '緊急対応'
                                    view: {
                                        id: 'af592cbc42104755b0bd6df13c11a84d'
                                        key: {
                                            name: 'x_144721_family_ap_urgent'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'due_date'
                            position: '7'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'c47225f7ffcf43f0af5b2a88534548a3'
                        key: {
                            question: {
                                id: 'ac42b52b868a4aeaa5a30c8f34decbff'
                                key: {
                                    cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                                    variable_set: 'NULL'
                                    name: 'improvement_area'
                                }
                            }
                            value: 'schedule'
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
                        table: 'sys_choice_set'
                        id: 'c825b37ab7bb46dea99fe83b865cdc0a'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'urgency_level'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'cf76b1893d344d579f2470db2f1ae5d8'
                        key: {
                            list_id: {
                                id: '6d037805a67945e2a6572ee0fdb0a7f0'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'urgency_level'
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
                        table: 'sys_ui_section'
                        id: 'd2fc8e643ec24846a075d31bcdb8c80d'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            caption: '支払い依頼'
                            view: {
                                id: 'a00c05a781a7483eb2fc41b1e8b502cb'
                                key: {
                                    name: 'x_144721_family_ap_payment'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd3278ec398fb40a295669f5bd10c8306'
                        key: {
                            sys_ui_section: {
                                id: '60e74693cdde45eb803130b942fde01d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '購入・準備依頼'
                                    view: {
                                        id: 'a199fbdd57174b39a8f920378d6ce41b'
                                        key: {
                                            name: 'x_144721_family_ap_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'due_date'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'd44a4dadcb98482babb01c6f6fd4dc75'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'parent_comment'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd4cb708446344d01a40deaf7f1d56309'
                        key: {
                            sys_ui_section: {
                                id: '60e74693cdde45eb803130b942fde01d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '購入・準備依頼'
                                    view: {
                                        id: 'a199fbdd57174b39a8f920378d6ce41b'
                                        key: {
                                            name: 'x_144721_family_ap_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_parent'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd568abfe0c904f33bf0458a3b84edad7'
                        key: {
                            sys_ui_section: {
                                id: 'd2fc8e643ec24846a075d31bcdb8c80d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '支払い依頼'
                                    view: {
                                        id: 'a00c05a781a7483eb2fc41b1e8b502cb'
                                        key: {
                                            name: 'x_144721_family_ap_payment'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd62974d8a0ba45bcb06119a29f26f25f'
                        key: {
                            sys_ui_section: {
                                id: '3317623fc1974d3bb8105e270b78c77e'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '緊急対応'
                                    view: {
                                        id: 'af592cbc42104755b0bd6df13c11a84d'
                                        key: {
                                            name: 'x_144721_family_ap_urgent'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'internal_note'
                            position: '11'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'd736f88f65754552b768aaaaeb4e5064'
                        key: {
                            question: {
                                id: 'b2325dce569643469627772af8f2af0e'
                                key: {
                                    cat_item: 'c811a8f00b20461ea46bcfb70ff4a295'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'other'
                        }
                    },
                    {
                        table: 'sys_ui_list_element'
                        id: 'd7518b0f28e342c8b95c7776e079e7a6'
                        key: {
                            list_id: {
                                id: '6d037805a67945e2a6572ee0fdb0a7f0'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                    element: 'NULL'
                                    relationship: 'NULL'
                                    parent: 'NULL'
                                }
                            }
                            element: 'state'
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
                        table: 'sys_ui_element'
                        id: 'd950539b4ccf44cabffaebec2625e90d'
                        key: {
                            sys_ui_section: {
                                id: 'd2fc8e643ec24846a075d31bcdb8c80d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '支払い依頼'
                                    view: {
                                        id: 'a00c05a781a7483eb2fc41b1e8b502cb'
                                        key: {
                                            name: 'x_144721_family_ap_payment'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'urgency_level'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd97543b94ee9406ca04dd55d07f9c904'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'source_summary'
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
                        table: 'sys_dictionary'
                        id: 'db7769bb0dfe49989d8d9a08c3178fb7'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dc23e261b04b450b9d19f803f6d314d9'
                        key: {
                            sys_ui_section: {
                                id: '72399e0ee78245daa9c963dbad7b6e9a'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '基本情報'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dd2b38a4acbd43ffb1a0ba7db8702d04'
                        key: {
                            sys_ui_section: {
                                id: '5956ace4691341aaa0be866d03b5e465'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '高額購入レビュー'
                                    view: {
                                        id: '3e502670086e49e9b02b5f82225dace3'
                                        key: {
                                            name: 'x_144721_family_ap_high_cost_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'short_description'
                            position: '2'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'de90af57a86b46a0b9f0658e7adcf427'
                        key: {
                            cat_item: 'c811a8f00b20461ea46bcfb70ff4a295'
                            variable_set: 'NULL'
                            name: 'due_date'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dfb255569c384e5b8c36e50232178f2c'
                        key: {
                            sys_ui_section: {
                                id: '60e74693cdde45eb803130b942fde01d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '購入・準備依頼'
                                    view: {
                                        id: 'a199fbdd57174b39a8f920378d6ce41b'
                                        key: {
                                            name: 'x_144721_family_ap_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e028549aa6cb4ecb910a630b33d43f3c'
                        key: {
                            sys_ui_section: {
                                id: '72399e0ee78245daa9c963dbad7b6e9a'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '基本情報'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e2292afb8d294e9d8684a205c307cba7'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'internal_note'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sc_cat_item_category'
                        id: 'e46b43c9ea614aa9bda5448dd4a2ffc8'
                        key: {
                            sc_cat_item: 'c811a8f00b20461ea46bcfb70ff4a295'
                            sc_category: 'cf91d54e77004536a7335ca9cda42128'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'e65558bf6b3b4aa38fea548f08342714'
                        key: {
                            cat_item: '859d96b24a804111b63277e24ebee8ba'
                            variable_set: 'NULL'
                            name: 'due_date'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'e7440e6fc1544c089921392068b06938'
                        key: {
                            cat_item: '0d2c04d8f9c14bc19802e40abf0bae34'
                            variable_set: 'NULL'
                            name: 'ai_assist'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'e7fda2e4d6a747938e1e4f1014094b07'
                        key: {
                            cat_item: '859d96b24a804111b63277e24ebee8ba'
                            variable_set: 'NULL'
                            name: 'ai_file_assist'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ea924db8750242a498a0e402bc719d74'
                        key: {
                            sys_ui_section: {
                                id: '60e74693cdde45eb803130b942fde01d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '購入・準備依頼'
                                    view: {
                                        id: 'a199fbdd57174b39a8f920378d6ce41b'
                                        key: {
                                            name: 'x_144721_family_ap_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'eb49eafb7ca94407906cbd7ca7bc6d27'
                        key: {
                            cat_item: 'c811a8f00b20461ea46bcfb70ff4a295'
                            variable_set: 'NULL'
                            name: 'ai_conversation_assist'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f2cd322ae1eb482c8aa663fbc17a9e3d'
                        key: {
                            sys_ui_section: {
                                id: '5956ace4691341aaa0be866d03b5e465'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '高額購入レビュー'
                                    view: {
                                        id: '3e502670086e49e9b02b5f82225dace3'
                                        key: {
                                            name: 'x_144721_family_ap_high_cost_purchase'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'due_date'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f2e76bbc486148468d6f547b8f9d41c3'
                        key: {
                            sys_ui_section: {
                                id: 'd2fc8e643ec24846a075d31bcdb8c80d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '支払い依頼'
                                    view: {
                                        id: 'a00c05a781a7483eb2fc41b1e8b502cb'
                                        key: {
                                            name: 'x_144721_family_ap_payment'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'source_summary'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f363428473b2461b87d2261460aad5df'
                        key: {
                            sys_ui_section: {
                                id: 'd2fc8e643ec24846a075d31bcdb8c80d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '支払い依頼'
                                    view: {
                                        id: 'a00c05a781a7483eb2fc41b1e8b502cb'
                                        key: {
                                            name: 'x_144721_family_ap_payment'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'assigned_parent'
                            position: '9'
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
                    {
                        table: 'sys_ui_form'
                        id: 'f7f4e8a8e06549edbb48877dfd381863'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            view: {
                                id: 'a199fbdd57174b39a8f920378d6ce41b'
                                key: {
                                    name: 'x_144721_family_ap_purchase'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'item_option_new'
                        id: 'f84fc70c0bc4430ea83059e0ad611d02'
                        key: {
                            cat_item: '859d96b24a804111b63277e24ebee8ba'
                            variable_set: 'NULL'
                            name: 'school_document'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f88a68a19d6245d692dea36e2e649a3c'
                        key: {
                            sys_ui_section: {
                                id: '3317623fc1974d3bb8105e270b78c77e'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '緊急対応'
                                    view: {
                                        id: 'af592cbc42104755b0bd6df13c11a84d'
                                        key: {
                                            name: 'x_144721_family_ap_urgent'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '4'
                        }
                    },
                    {
                        table: 'question_choice'
                        id: 'f8910e544bfc482797b00389c3ac964c'
                        key: {
                            question: {
                                id: 'b2325dce569643469627772af8f2af0e'
                                key: {
                                    cat_item: 'c811a8f00b20461ea46bcfb70ff4a295'
                                    variable_set: 'NULL'
                                    name: 'request_type'
                                }
                            }
                            value: 'payment'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f90a8c42b4d540e6bfdd1ca3daf82ab6'
                        key: {
                            sys_ui_section: {
                                id: '72399e0ee78245daa9c963dbad7b6e9a'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '基本情報'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'due_date'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'fc06d3dcf61b4644972a0ce556ec5b65'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'attachment_required'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fedee509974347bd9a2fa43595e5b93e'
                        key: {
                            sys_ui_section: {
                                id: 'd2fc8e643ec24846a075d31bcdb8c80d'
                                key: {
                                    name: 'x_144721_family_ap_ui16_request'
                                    caption: '支払い依頼'
                                    view: {
                                        id: 'a00c05a781a7483eb2fc41b1e8b502cb'
                                        key: {
                                            name: 'x_144721_family_ap_payment'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'ffbb5723fd274f8daa59f2f06126f703'
                        key: {
                            name: 'x_144721_family_ap_ui16_request'
                            element: 'request_type'
                        }
                    },
                ]
            }
        }
    }
}
