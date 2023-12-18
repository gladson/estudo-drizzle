import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

import { roles } from "./schema";

export const insertRoleSchema = createInsertSchema(roles);
export const selectRoleSchema = createSelectSchema(roles);

export type IRole = z.infer<typeof insertRoleSchema>;
export type SRole = z.infer<typeof selectRoleSchema>;