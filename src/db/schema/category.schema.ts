import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { bigint, mysqlTable, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";

export const CategorySchema = mysqlTable("categories_tb", {
    id: bigint("id", { mode: "number" }).autoincrement().primaryKey(),
    name: varchar("name", { length: 100 }).notNull(),
    slug: varchar("slug", { length: 100 }).notNull(),
    description: text("description").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow().onUpdateNow(),
    deletedAt: timestamp("deleted_at").notNull()
},
    (categories_tb) => ({
        nameIdx: uniqueIndex("blogs_tb_name_idx").on(categories_tb.name),
        slugIdx: uniqueIndex("blogs_tb_slug_idx").on(categories_tb.slug)
    })
);

export type SCategory = InferSelectModel<typeof CategorySchema>;
export type ICategory = InferInsertModel<typeof CategorySchema>;