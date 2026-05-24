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
                    package_json: {
                        table: 'sys_module'
                        id: 'e32df436d6224a008e9dd718bac9bfa3'
                    }
                    src_server_script_ts: {
                        table: 'sys_module'
                        id: '9ebc5e542c444d6db718dcd50d08687b'
                    }
                }
            }
        }
    }
}
