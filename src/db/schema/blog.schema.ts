import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { bigint, boolean, decimal, int, mysqlTable, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";
import { UserSchema } from "./user.schema";

export const BlogSchema = mysqlTable("blogs_tb", {
    id: bigint("id", { mode: "number" }).autoincrement().primaryKey(),
    title: varchar("title", { length: 100 }).notNull(),
    slug: varchar("slug", { length: 100 }).notNull(),
    description: text("description").notNull(),
    content: text("content").notNull(),
    published: boolean("published").notNull().default(true),
    views: int("views").notNull().default(0),
    rating: decimal("rating", { precision: 2, scale: 1 }).notNull().default("0.0"), // 7.5, 6.5, 3.0
    authorId: bigint("author_id", { mode: "number" }).notNull().references(() => UserSchema.id, { onDelete: "cascade", onUpdate: "cascade" }),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow().onUpdateNow(),
    deletedAt: timestamp("deleted_at").notNull()
},
    (blogs_tb) => ({
        titleIdx: uniqueIndex("blogs_tb_title_idx").on(blogs_tb.title),
        slugIdx: uniqueIndex("blogs_tb_slug_idx").on(blogs_tb.slug),
        publishedIdx: uniqueIndex("blogs_tb_published_idx").on(blogs_tb.published),
    })
);

export type SBlog = InferSelectModel<typeof BlogSchema>;
export type IBlog = InferInsertModel<typeof BlogSchema>;