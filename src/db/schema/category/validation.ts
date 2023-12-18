import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { categories } from "./schema";

export const insertCategorySchema = createInsertSchema(categories);
export const selectCategorySchema = createSelectSchema(categories);

export type ICategory = z.infer<typeof insertCategorySchema>;
export type SCategory = z.infer<typeof selectCategorySchema>;