import { logger } from '../styles/logger.ts'

import { db } from '../../db/client.ts'

export function create(title?: string) {
  if (!title) {
    return logger('please provide a --title=example', { color: 'red' })
  }

  try {
    const changes = db.exec(
      'INSERT INTO todos (title, completed) VALUES (?, ?)',
      title,
      false
    )

    if (changes === 0) {
      throw new Error('error while creating the todo, try again!')
    }

    db.close()

    logger('todo created sucessfully!', { color: 'green' })
  } catch (error) {
    if (error instanceof Error) {
      logger(error.message, { color: 'red' })
    }
    throw error
  }
}
