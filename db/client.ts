import { Database } from '@db/sqlite'

import { config } from '@/config/config.ts'
import { TodoSchema } from '@/db/schema.ts'

export const db = new Database(config.database)

export function initialize() {
  db.exec(TodoSchema)
}
