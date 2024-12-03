import { Database } from "@db/sqlite";

export function prepareDatabase(): Database {
    // create an instance of the database
    const db = new Database("src/api/database/chore.db", {
        create: true // create if does not exist 
    });

    // create chores table
    db.exec(`
        CREATE TABLE IF NOT EXISTS chores (
            id INTEGER NOT NULL PRIMARY KEY, 
            label VARCHAR(60) NOT NULL UNIQUE, 
            dayToReset DATETIME, 
            daysToKeep INTEGER, 
            done BOOLEAN NOT NULL
        );  
    `);

    // create default chores                
    db.exec(`
        REPLACE INTO chores (
            label, dayToReset, daysToKeep, done
        ) VALUES (
            'Water the house plants',
            datetime('now', '+1 day'),
            1,
            false       
        ),
        (
            'Feed the cat',
            datetime('now', '+1 day'),
            1,
            false
        );
    `)

    return db;
}   