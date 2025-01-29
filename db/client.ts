import { Database } from '@db/sqlite'

import { config } from '../cmd/config/config.ts'

export const db = new Database(config.database)

export function initialize() {
  db.exec(
    `
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      completed BOOLEAN
    );
  `
  )
}
