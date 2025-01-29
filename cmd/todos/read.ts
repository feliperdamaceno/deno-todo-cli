import { logger } from '../styles/logger.ts'

import { db } from '../../db/client.ts'

export function getAll() {
  try {
    const stmt = db.prepare('SELECT * FROM todos')

    const rows = stmt.all()

    const todos = []

    for (const row of rows) {
      todos.push(row)
    }

    console.table(todos)

    db.close()
  } catch (error) {
    if (error instanceof Error) {
      logger(error.message, { color: 'red' })
    }
    throw error
  }
}

export function getById(id: number) {
  try {
    const stmt = db.prepare('SELECT * FROM todos WHERE id = ?')

    const todo = stmt.get(id)

    console.table(todo)

    db.close()
  } catch (error) {
    if (error instanceof Error) {
      logger(error.message, { color: 'red' })
    }
    throw error
  }
}
