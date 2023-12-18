import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { blogToCategories } from "./schema";

export const insertBlogToCategorySchema = createInsertSchema(blogToCategories);
export const selectBlogToCategorySchema = createSelectSchema(blogToCategories);

export type IBlogToCategory = z.infer<typeof insertBlogToCategorySchema>;
export type SBlogToCategory = z.infer<typeof selectBlogToCategorySchema>;