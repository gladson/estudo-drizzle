import { bigint, boolean, decimal, int, mysqlTable, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/mysql-core";
import { users } from "../user/schema";

export const blogs = mysqlTable("blogs_tb", {
    id: bigint("id", { mode: "number" }).autoincrement().primaryKey(),
    title: varchar("title", { length: 100 }).notNull(),
    slug: varchar("slug", { length: 100 }).notNull(),
    description: text("description"),
    content: text("content").notNull(),
    published: boolean("published").default(true),
    views: int("views").default(0),
    rating: decimal("rating", { precision: 2, scale: 1 }).default("0.0"), // 7.5, 6.5, 3.0
    authorId: bigint("author_id", { mode: "number" }).references(() => users.id, { onDelete: "cascade", onUpdate: "cascade" }),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").onUpdateNow(),
    deletedAt: timestamp("deleted_at")
},
    (blogs_tb) => ({
        titleIdx: uniqueIndex("blogs_tb_title_idx").on(blogs_tb.title),
        slugIdx: uniqueIndex("blogs_tb_slug_idx").on(blogs_tb.slug),
        publishedIdx: uniqueIndex("blogs_tb_published_idx").on(blogs_tb.published),
    })
);
