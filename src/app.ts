import { sql } from 'drizzle-orm';
import { drizzle } from "drizzle-orm/mysql2";

import { DB } from "./db/db";
import { users } from "./db/schema/user";

import { logger } from "./config/logger";
import { IUser } from './db/schema/user/validation';

const log = logger.getLogger('APP');

export class App {
    constructor() { }

    handler = async (): Promise<any> => {
        log.debug(process.env.DBHOST);
        const pool: any = new DB().pool();
        const schemaConfig = new DB().schemaConfig;
        const db = drizzle(pool, schemaConfig);
        const newUser: IUser = {
            name: "Jao",
            email: "ab@a.com",
            password: "123",
            gender: "male",
            createdAt: null,
            updatedAt: new Date(),
            deletedAt: new Date()
        };
        const createUser = await db.insert(users).values(newUser as any);
        log.debug(createUser);
        const allUsers = await db.select().from(users);
        // You can also use the query builder:
        const allUsers2 = await db.query.users.findMany();
        log.debug(allUsers);
        log.debug(allUsers2);

        // You can also do raw queries:
        // import { sql } from 'drizzle-orm';
        const query = sql<string>`SELECT * FROM 'Hello World!'`;
        const result = db.select(query);
        log.debug(result);

        return allUsers;
    }


}

new App().handler();