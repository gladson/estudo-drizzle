import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

import { logger } from '../config/logger';
import { IDB } from './interface/idb';


const log = logger.getLogger("DB:ORM")

class DB {
    private envDBIn: IDB;
    constructor() {
        this.envDBIn = {
            host: (process.env.DBHOST || 'localhost'),
            port: (parseInt(process.env.DBPORT!) || 3306),
            user: (process.env.DBUSER || 'root'),
            password: (process.env.DBPASSWORD || 'root'),
            database: (process.env.DBDATABASE || 'testdb'),
        }
    }

    envDB = async () => {
        return this.envDBIn
    }

    envDBLocal = () => {
        return this.envDBIn
    }

    connect = async () => {
        try {
            log.info('Connecting to database...');
            const pool = mysql.createPool(this.envDBIn);
            const conn = drizzle(pool);
            log.info('Connected to database!');
            return conn;
        } catch (error) {
            log.error(error);
        }
    }
}

export { DB };

