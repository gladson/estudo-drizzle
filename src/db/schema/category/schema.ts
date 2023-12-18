import { bigint, mysqlTable, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";

export const categories = mysqlTable("categories_tb", {
    id: bigint("id", { mode: "number" }).autoincrement().primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    slug: varchar("slug", { length: 100 }).notNull(),
    description: text("description"),
    ccreatedAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").onUpdateNow(),
    deletedAt: timestamp("deleted_at")
},
    (categories_tb) => ({
        nameIdx: uniqueIndex("blogs_tb_name_idx").on(categories_tb.name),
        slugIdx: uniqueIndex("blogs_tb_slug_idx").on(categories_tb.slug)
    })
);
