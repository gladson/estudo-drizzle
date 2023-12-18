import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { users } from "./schema";

export const insertUserSchema = createInsertSchema(users, {
    name: (schema: any) => schema.name.min(1).max(250).optional(),
    createdAt: (schema: any) => schema.createdAt.optional(),
});
export const selectUserSchema = createSelectSchema(users);

export type IUser = z.infer<typeof insertUserSchema>;
export type SUser = z.infer<typeof selectUserSchema>;