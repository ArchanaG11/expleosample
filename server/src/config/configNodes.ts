export default {
    "db-config": {
        "sd_FjVAye2tq6fwHd8V": {
            "id": "sd_FjVAye2tq6fwHd8V",
            "type": "db-config",
            "viewType": "server",
            "nodeType": "flow",
            "dbOption": {
                "name": "mysql_0",
                "type": "mysql",
                "host": "localhost",
                "port": 3306,
                "username": "username",
                "password": "password",
                "database": "database",
                "synchronize": true,
                "extra": {
                    "connectionLimit": 10
                },
                "charset": "UTF8_GENERAL_CI",
                "timezone": "local",
                "connectTimout": 10000,
                "acquireTimeout": 10000,
                "insecureAuth": false,
                "supportBigNumbers": true,
                "bigNumberStrings": false,
                "dateStrings": false,
                "debug": false,
                "trace": true,
                "multipleStatements": false,
                "flags": "flags"
            },
            "disabledb": false,
            "selectedDB": "mysql",
            "selectedOption": "mysql",
            "dbCategory": "sql",
            "mssql_name": "mssql_0",
            "mssql_type": "mssql",
            "mssql_host": "localhost",
            "mssql_port": 1433,
            "mssql_username": "username",
            "mssql_password": "password",
            "mssql_database": "database",
            "mssql_connectionTimeout": 15000,
            "mssql_requestTimeout": 15000,
            "mssql_synchronize": true,
            "mssql_options.instanceName": "",
            "mssql_pool.max": 10,
            "mssql_pool.min": 1,
            "mssql_pool.maxWaitingClients": 0,
            "mssql_pool.fifo": true,
            "mssql_pool.priorityRange": 1,
            "mssql_pool.autostart": true,
            "mssql_pool.evictionRunIntervalMillis": 0,
            "mssql_pool.numTestsPerRun": 3,
            "mssql_pool.softIdleTimeoutMillis": -1,
            "mssql_options.cancelTimeout": 5000,
            "mssql_options.packetSize": 4096,
            "mssql_options.useUTC": true,
            "mssql_options.localAddress": "",
            "mssql_options.readOnlyIntent": false,
            "mssql_options.encrypt": false,
            "oracle_name": "oracle_0",
            "oracle_type": "oracle",
            "oracle_host": "localhost",
            "oracle_port": 1521,
            "oracle_username": "username",
            "oracle_password": "password",
            "oracle_serviceName": "orcl",
            "oracle_connectionTimeout": 15000,
            "oracle_requestTimeout": 15000,
            "oracle_synchronize": true,
            "mongodb_name": "mongodb_0",
            "mongodb_type": "mongodb",
            "mongodb_url": "mongodb://localhost:27017",
            "mongodb_options": "",
            "mysql_name": "mysql_0",
            "mysql_type": "mysql",
            "mysql_host": "localhost",
            "mysql_port": 3306,
            "mysql_username": "username",
            "mysql_password": "password",
            "mysql_database": "database",
            "mysql_synchronize": true,
            "mysql_extra.connectionLimit": 10,
            "mysql_charset": "UTF8_GENERAL_CI",
            "mysql_timezone": "local",
            "mysql_connectTimout": 10000,
            "mysql_acquireTimeout": 10000,
            "mysql_insecureAuth": false,
            "mysql_supportBigNumbers": true,
            "mysql_bigNumberStrings": false,
            "mysql_dateStrings": false,
            "mysql_debug": false,
            "mysql_trace": true,
            "mysql_multipleStatements": false,
            "mysql_flags": "flags",
            "mariadb_name": "mariadb_0",
            "mariadb_type": "mariadb",
            "mariadb_host": "localhost",
            "mariadb_port": 3306,
            "mariadb_username": "username",
            "mariadb_synchronize": true,
            "mariadb_password": "password",
            "mariadb_database": "database",
            "mariadb_charset": "UTF8_GENERAL_CI",
            "mariadb_timezone": "local",
            "mariadb_extra.connectionLimit": 10,
            "mariadb_connectTimout": 10000,
            "mariadb_acquireTimeout": 10000,
            "mariadb_insecureAuth": false,
            "mariadb_supportBigNumbers": true,
            "mariadb_bigNumberStrings": false,
            "mariadb_dateStrings": false,
            "mariadb_debug": false,
            "mariadb_trace": true,
            "mariadb_multipleStatements": false,
            "mariadb_flags": "flags",
            "postgres_name": "postgres_0",
            "postgres_type": "postgres",
            "postgres_host": "localhost",
            "postgres_port": 5432,
            "postgres_username": "username",
            "postgres_password": "password",
            "postgres_database": "database",
            "postgres_schema": "public",
            "postgres_uuidExtension": "",
            "postgres_synchronize": false,
            "category": "config",
            "__ssdTypeInputs__": {
                "mssql_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "mssql_port": {
                    "type": "num",
                    "value": 1433
                },
                "mssql_username": {
                    "type": "str",
                    "value": "username"
                },
                "mssql_password": {
                    "type": "str",
                    "value": "password"
                },
                "mssql_database": {
                    "type": "str",
                    "value": "database"
                },
                "mssql_connectionTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "mssql_requestTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "mssql_synchronize": {
                    "type": "bool",
                    "value": true
                },
                "mssql_options.instanceName": {
                    "type": "str",
                    "value": ""
                },
                "mssql_pool.max": {
                    "type": "num",
                    "value": 10
                },
                "mssql_pool.min": {
                    "type": "num",
                    "value": 1
                },
                "mssql_pool.maxWaitingClients": {
                    "type": "num",
                    "value": ""
                },
                "mssql_pool.fifo": {
                    "type": "bool",
                    "value": true
                },
                "mssql_pool.priorityRange": {
                    "type": "num",
                    "value": 1
                },
                "mssql_pool.autostart": {
                    "type": "bool",
                    "value": true
                },
                "mssql_pool.evictionRunIntervalMillis": {
                    "type": "num",
                    "value": 0
                },
                "mssql_pool.numTestsPerRun": {
                    "type": "num",
                    "value": 3
                },
                "mssql_pool.softIdleTimeoutMillis": {
                    "type": "num",
                    "value": -1
                },
                "mssql_options.cancelTimeout": {
                    "type": "num",
                    "value": 5000
                },
                "mssql_options.packetSize": {
                    "type": "num",
                    "value": 4096
                },
                "mssql_options.useUTC": {
                    "type": "bool",
                    "value": true
                },
                "mssql_options.localAddress": {
                    "type": "str",
                    "value": ""
                },
                "mssql_options.readOnlyIntent": {
                    "type": "bool",
                    "value": false
                },
                "mssql_options.encrypt": {
                    "type": "bool",
                    "value": false
                },
                "oracle_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "oracle_port": {
                    "type": "num",
                    "value": 1521
                },
                "oracle_username": {
                    "type": "str",
                    "value": "username"
                },
                "oracle_password": {
                    "type": "str",
                    "value": "password"
                },
                "oracle_serviceName": {
                    "type": "str",
                    "value": "orcl"
                },
                "oracle_connectionTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "oracle_requestTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "oracle_synchronize": {
                    "type": "bool",
                    "value": true
                },
                "mongodb_url": {
                    "type": "str",
                    "value": "mongodb://localhost:27017"
                },
                "mongodb_options": {
                    "type": "str",
                    "value": ""
                },
                "mysql_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "mysql_port": {
                    "type": "num",
                    "value": 3306
                },
                "mysql_username": {
                    "type": "str",
                    "value": "username"
                },
                "mysql_password": {
                    "type": "str",
                    "value": "password"
                },
                "mysql_database": {
                    "type": "str",
                    "value": "database"
                },
                "mysql_synchronize": {
                    "type": "bool",
                    "value": true
                },
                "mysql_extra.connectionLimit": {
                    "type": "num",
                    "value": 10
                },
                "mysql_charset": {
                    "type": "str",
                    "value": "UTF8_GENERAL_CI"
                },
                "mysql_timezone": {
                    "type": "str",
                    "value": "local"
                },
                "mysql_connectTimout": {
                    "type": "num",
                    "value": 10000
                },
                "mysql_acquireTimeout": {
                    "type": "num",
                    "value": 10000
                },
                "mysql_insecureAuth": {
                    "type": "bool",
                    "value": false
                },
                "mysql_supportBigNumbers": {
                    "type": "bool",
                    "value": true
                },
                "mysql_bigNumberStrings": {
                    "type": "bool",
                    "value": false
                },
                "mysql_dateStrings": {
                    "type": "bool",
                    "value": false
                },
                "mysql_debug": {
                    "type": "bool",
                    "value": false
                },
                "mysql_trace": {
                    "type": "bool",
                    "value": true
                },
                "mysql_multipleStatements": {
                    "type": "bool",
                    "value": false
                },
                "mysql_flags": {
                    "type": "str",
                    "value": "flags"
                },
                "mariadb_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "mariadb_port": {
                    "type": "num",
                    "value": 3306
                },
                "mariadb_username": {
                    "type": "str",
                    "value": "username"
                },
                "mariadb_synchronize": {
                    "type": "bool",
                    "value": true
                },
                "mariadb_password": {
                    "type": "str",
                    "value": "password"
                },
                "mariadb_database": {
                    "type": "str",
                    "value": "database"
                },
                "mariadb_charset": {
                    "type": "str",
                    "value": "UTF8_GENERAL_CI"
                },
                "mariadb_timezone": {
                    "type": "str",
                    "value": "local"
                },
                "mariadb_extra.connectionLimit": {
                    "type": "num",
                    "value": 10
                },
                "mariadb_connectTimout": {
                    "type": "num",
                    "value": 10000
                },
                "mariadb_acquireTimeout": {
                    "type": "num",
                    "value": 10000
                },
                "mariadb_insecureAuth": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_supportBigNumbers": {
                    "type": "bool",
                    "value": true
                },
                "mariadb_bigNumberStrings": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_dateStrings": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_debug": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_trace": {
                    "type": "bool",
                    "value": true
                },
                "mariadb_multipleStatements": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_flags": {
                    "type": "str",
                    "value": "flags"
                },
                "postgres_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "postgres_port": {
                    "type": "num",
                    "value": 5432
                },
                "postgres_username": {
                    "type": "str",
                    "value": "username"
                },
                "postgres_password": {
                    "type": "str",
                    "value": "password"
                },
                "postgres_database": {
                    "type": "str",
                    "value": "database"
                },
                "postgres_schema": {
                    "type": "str",
                    "value": "public"
                },
                "postgres_uuidExtension": {
                    "type": "str",
                    "value": ""
                },
                "postgres_synchronize": {
                    "type": "bool",
                    "value": false
                }
            },
            "users": {}
        }
    }
}