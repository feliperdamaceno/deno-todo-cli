import { logger } from '@/helpers/logger.ts'

import { db } from '@/db/client.ts'

export function create(title: string) {
  try {
    const changes = db.exec(
      'INSERT INTO todos (title, completed) VALUES (?, ?)',
      title,
      false
    )

    if (changes === 0) {
      throw new Deno.errors.Interrupted('Error while creating the todo.')
    }

    logger('Todo sucessfully created', { color: 'green' })
  } catch (error) {
    if (error instanceof Error) return logger(error.message, { color: 'red' })
    throw new Error('Unexpected error happened, please try again!')
  } finally {
    db.close()
  }
}
