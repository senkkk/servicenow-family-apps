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
                        table: 'item_option_new'
                        id: '0ea7e74c1d3e4a09aeaa4f2229801dcc'
                        key: {
                            cat_item: 'c811a8f00b20461ea46bcfb70ff4a295'
                            variable_set: 'NULL'
                            name: 'notes'
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
                        table: 'item_option_new'
                        id: '1d5e2e68ef2e496e88dd231f53929009'
                        key: {
                            cat_item: 'c811a8f00b20461ea46bcfb70ff4a295'
                            variable_set: 'NULL'
                            name: 'source_summary'
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
                        table: 'item_option_new'
                        id: '343ea98d596a459ba0b99a988d394ec0'
                        key: {
                            cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                            variable_set: 'NULL'
                            name: 'proposal_title'
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
                        id: '48d20ec460d74ba798a1b1b369ea2435'
                        key: {
                            cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                            variable_set: 'NULL'
                            name: 'discussion_deadline'
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
                        table: 'sc_cat_item_category'
                        id: '5896632dc63a49fc84295191690a9600'
                        key: {
                            sc_cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                            sc_category: '8a2407dafa8140c6924af95efdb2492d'
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
                        table: 'sc_cat_item_catalog'
                        id: '69d606ad2cda402aac30aa1e1a4e7426'
                        key: {
                            sc_cat_item: 'c811a8f00b20461ea46bcfb70ff4a295'
                            sc_catalog: 'd8293035f1644bb8b454120fb8829aca'
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
                        id: '7257935f7b3b4f2dab76a30bbbf62fc1'
                        key: {
                            cat_item: '859d96b24a804111b63277e24ebee8ba'
                            variable_set: 'NULL'
                            name: 'requested_action'
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
                        id: '7b96a95267754efc94e559ec8691b918'
                        key: {
                            cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                            variable_set: 'NULL'
                            name: 'current_issue'
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
                        table: 'item_option_new'
                        id: '93d4ccf08ea3499b9af8802124d41626'
                        key: {
                            cat_item: '0d2c04d8f9c14bc19802e40abf0bae34'
                            variable_set: 'NULL'
                            name: 'requested_action'
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
                        table: 'm2m_sp_portal_catalog'
                        id: 'a30439759f724fb6a1c0e0168efd5f79'
                        key: {
                            sp_portal: '588c32b53ab34154808b5cf37c455855'
                            sc_catalog: 'd8293035f1644bb8b454120fb8829aca'
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
                        table: 'item_option_new'
                        id: 'b127fd3b1f5e40fbac966e9891bdb7f8'
                        key: {
                            cat_item: 'ed9d3f0c1deb4b76bffecc2118963388'
                            variable_set: 'NULL'
                            name: 'notes'
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
                        table: 'sc_cat_item_category'
                        id: 'b66faaabbb644e9dbb43062a004c188f'
                        key: {
                            sc_cat_item: '859d96b24a804111b63277e24ebee8ba'
                            sc_category: 'cf91d54e77004536a7335ca9cda42128'
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
                        table: 'item_option_new'
                        id: 'd0b40021cd1248fba0f95d7a80491a9c'
                        key: {
                            cat_item: '0d2c04d8f9c14bc19802e40abf0bae34'
                            variable_set: 'NULL'
                            name: 'notes'
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
                        id: 'de90af57a86b46a0b9f0658e7adcf427'
                        key: {
                            cat_item: 'c811a8f00b20461ea46bcfb70ff4a295'
                            variable_set: 'NULL'
                            name: 'due_date'
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
                        table: 'item_option_new'
                        id: 'eb49eafb7ca94407906cbd7ca7bc6d27'
                        key: {
                            cat_item: 'c811a8f00b20461ea46bcfb70ff4a295'
                            variable_set: 'NULL'
                            name: 'ai_conversation_assist'
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
                        table: 'item_option_new'
                        id: 'f84fc70c0bc4430ea83059e0ad611d02'
                        key: {
                            cat_item: '859d96b24a804111b63277e24ebee8ba'
                            variable_set: 'NULL'
                            name: 'school_document'
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
                ]
            }
        }
    }
}
