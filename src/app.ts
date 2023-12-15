import { logger } from "./config/logger";
import { User } from "./interface/user";

const log = logger.getLogger('APP');

export function saveUserToDatabase(user: User) {
    log.debug(process.env.DBHOST);
    log.debug(user);
    return user;
}