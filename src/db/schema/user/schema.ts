import { bigint, int, mysqlEnum, mysqlTable, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";

import { roles } from "../role/schema";


export const users = mysqlTable("users_tb", {
    id: bigint("id", { mode: "number" }).autoincrement().primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    email: varchar("email", { length: 100 }).notNull(),
    password: varchar("password", { length: 255 }).notNull(),
    age: int("age"),
    gender: mysqlEnum("gender", ["male", "female", "other"]).notNull(),
    role_id: bigint("role_id", { mode: "number" }).references(() => roles.id, {
        onDelete: "cascade",
        onUpdate: "cascade"
    }),
    createdAt: timestamp("created_at"),
    updatedAt: timestamp("updated_at").onUpdateNow(),
    deletedAt: timestamp("deleted_at")
},
    (users_tb) => ({
        nameIdx: uniqueIndex("users_tb_name_idx").on(users_tb.name),
        emailIdx: uniqueIndex("users_tb_email_idx").on(users_tb.email),
    })
);
