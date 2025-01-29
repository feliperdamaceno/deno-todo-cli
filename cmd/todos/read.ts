import { logger } from '../styles/logger.ts'

import { db } from '../../db/client.ts'

export function getAll() {
  try {
    const stmt = db.prepare('SELECT * FROM todos')
    const todos = stmt.all()

    console.table(todos)
  } catch (error) {
    if (error instanceof Error) {
      logger(error.message, { color: 'red' })
    }

    throw error
  } finally {
    db.close()
  }
}

export function getById(id: number) {
  try {
    const stmt = db.prepare('SELECT * FROM todos WHERE id = ?')
    const todo = stmt.get(id)

    console.table(todo)
  } catch (error) {
    if (error instanceof Error) {
      logger(error.message, { color: 'red' })
    }

    throw error
  } finally {
    db.close()
  }
}
