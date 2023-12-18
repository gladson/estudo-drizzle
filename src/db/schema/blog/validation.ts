import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { blogs } from "./schema";

export const insertBlogSchema = createInsertSchema(blogs);
export const selectBlogSchema = createSelectSchema(blogs);

export type IBlog = z.infer<typeof insertBlogSchema>;
export type SBlog = z.infer<typeof selectBlogSchema>;