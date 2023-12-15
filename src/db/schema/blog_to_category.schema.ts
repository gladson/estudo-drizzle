import { bigint, mysqlTable, timestamp } from "drizzle-orm/mysql-core";
import { BlogSchema } from "./blog.schema";
import { CategorySchema } from "./category.schema";


export const BlogToCategorySchema = mysqlTable('blog_to_category_tb', {
    id: bigint("id", { mode: "number" }).autoincrement().primaryKey(),
    blogId: bigint("blog_id", { mode: "number" }).notNull().references(() => BlogSchema.id),
    categoryId: bigint("category_id", { mode: "number" }).notNull().references(() => CategorySchema.id),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow().onUpdateNow(),
    deletedAt: timestamp("deleted_at").notNull()
});

// export const BlogToCategorySchema = relations(BlogSchema, ({ many }) => ({
//     categories: many(CategorySchema)
// }))