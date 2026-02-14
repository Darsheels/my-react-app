import Database from "better-sqlite3";

const db = new Database("database.db")

db.exec(`
    CREATE TABLE IF NOT EXISTS categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT , 
        name TEXT UNIQUE NOT NULL
    );

    CREATE TABLE IF NOT EXISTS tasks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NUll,
        category TEXT,
        completed INTEGER DEFAULT 0,
        createdAt TEXT
    );
   `);

export default db;