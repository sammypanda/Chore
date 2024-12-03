import { Database } from "@db/sqlite";

export function prepareDatabase(): Database {
    // create an instance of the database
    const db = new Database("src/api/database/chore.db", {
        create: true // create if does not exist 
    });

    return db;
}