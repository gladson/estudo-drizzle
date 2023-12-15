import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { bigint, mysqlTable, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";

export const RoleSchema = mysqlTable("roles_tb", {
    id: bigint("id", { mode: "number" }).autoincrement().primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    slug: varchar("slug", { length: 100 }).notNull(),
    description: text("description").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow().onUpdateNow(),
    deletedAt: timestamp("deleted_at").notNull()
},
    (roles_tb) => ({
        nameIdx: uniqueIndex("roles_tb_name_idx").on(roles_tb.name),
        slugIdx: uniqueIndex("roles_tb_slug_idx").on(roles_tb.slug),
    })
);

export type SRole = InferSelectModel<typeof RoleSchema>;
export type IRole = InferInsertModel<typeof RoleSchema>;