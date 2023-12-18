import { bigint, mysqlTable, timestamp } from "drizzle-orm/mysql-core";

import { categories } from "../../category/schema";
import { blogs } from "../schema";


export const blogToCategories = mysqlTable('blog_to_category_tb', {
    id: bigint("id", { mode: "number" }).autoincrement().primaryKey(),
    blogId: bigint("blog_id", { mode: "number" }).notNull().references(() => blogs.id),
    categoryId: bigint("category_id", { mode: "number" }).notNull().references(() => categories.id),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").onUpdateNow(),
    deletedAt: timestamp("deleted_at")
});

// export const BlogToCategorySchema = relations(BlogSchema, ({ many }) => ({
//     categories: many(CategorySchema)
// }))

