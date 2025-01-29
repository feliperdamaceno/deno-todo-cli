import { logger } from '../styles/logger.ts'

import { db } from '../../db/client.ts'

export function create(title: string) {
  try {
    if (!title) {
      throw new Error('please provide a --title=example')
    }

    const changes = db.exec(
      'INSERT INTO todos (title, completed) VALUES (?, ?)',
      title,
      false
    )

    if (changes === 0) {
      throw new Error('error while creating the todo, try again!')
    }

    logger('todo sucessfully created!', { color: 'green' })
  } catch (error) {
    if (error instanceof Error) {
      logger(error.message, { color: 'red' })
    }

    throw error
  } finally {
    db.close()
  }
}
