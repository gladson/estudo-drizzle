import { MySql2Database, MySql2DrizzleConfig } from 'drizzle-orm/mysql2';
import mysql, { Pool } from 'mysql2/promise';

import { logger } from '../config/logger';
import { IDB } from './interface/idb';

import * as schema from './schema';

const log = logger.getLogger("DB:ORM")

class DB {
    private envDBIn: IDB;
    public schemaConfig: MySql2DrizzleConfig<any>;
    constructor() {
        this.envDBIn = {
            host: (process.env.DBHOST || 'localhost'),
            port: (parseInt(process.env.DBPORT!) || 3306),
            user: (process.env.DBUSER || 'root'),
            password: (process.env.DBPASSWORD || 'root'),
            database: (process.env.DBDATABASE || 'testdb'),
        }

        this.schemaConfig = { mode: 'default', schema }
    }

    envDB = async () => {
        return this.envDBIn
    }

    private envDBLocal = () => {
        return this.envDBIn
    }

    // connect = (): MySql2Database<Record<string, never>> | undefined => {
    pool = (): MySql2Database<Record<string, never>> | Pool | undefined => {
        try {
            log.info('Connecting to database...');
            const pool = mysql.createPool(this.envDBIn);
            // const pool: Connection = await mysql.createConnection(this.envDBIn);
            // const conn = drizzle(pool, this.schemaConfig);
            log.info('Connected to database!');
            return pool;
        } catch (error) {
            log.error(error);
        }
    }
}

const dbClass = new DB();
// const pool = dbClass.pool();

export { DB };

