import { bigint, mysqlTable, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";

export const roles = mysqlTable("roles_tb", {
    id: bigint("id", { mode: "number" }).autoincrement().primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    slug: varchar("slug", { length: 100 }).notNull(),
    description: text("description"),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").onUpdateNow(),
    deletedAt: timestamp("deleted_at")
},
    (roles_tb) => ({
        nameIdx: uniqueIndex("roles_tb_name_idx").on(roles_tb.name),
        slugIdx: uniqueIndex("roles_tb_slug_idx").on(roles_tb.slug),
    })
);
