import path from 'node:path';

import { drizzle } from 'drizzle-orm/mysql2';
import { migrate } from "drizzle-orm/mysql2/migrator";
import mysql from 'mysql2/promise';



import { logger } from '../config/logger';
import { DB } from './db';

const log = logger.getLogger("DB:MIGRATIONS")
// const envDBX = envDB;

const migrateDb = async () => {
    try {
        log.info('Connecting to database...');
        log.debug(new DB().envDB);
        const envDB = await new DB().envDB();
        const client = await mysql.createConnection(envDB);
        const conn = drizzle(client);
        log.info('Connected to database!');
        log.info('Migrating database...');
        log.info(path.resolve(__dirname, 'migration'));
        await migrate(conn, {
            migrationsFolder: path.resolve(__dirname, 'migration'),
        });
        await client.end();
        log.info('Database migrated!');
        process.exit(0);
    } catch (error) {
        log.error(error);
        process.exit(0);
    }
}

migrateDb();