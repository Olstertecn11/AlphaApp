
import { SQLiteDatabase } from "expo-sqlite";

export async function initializeDatabase(database) {

  await database.execAsync(`
    CREATE TABLE IF NOT EXISTS avance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      modulo TEXT NOT NULL,
      letra TEXT NOT NULL,
      fecha TEXT NOT NULL
    );
  `);
  console.log('Database initialized');
}

