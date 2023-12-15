
import type { Config } from "drizzle-kit";

import * as dotenv from "dotenv";
dotenv.config();

import { DB } from "./db";
import { IDB } from "./interface/idb";

const envDB: IDB = new DB().envDBLocal();
export default {
  schema: "./src/db/schema/*",
  out: "./src/db/migration",
  driver: "mysql2",
  dbCredentials: envDB,
} satisfies Config;
