import { db } from '@/db/client.ts'

export function create(title: string): null | Error {
  try {
    const changes = db.exec(
      'INSERT INTO todos (title, completed) VALUES (?, ?)',
      title,
      false
    )

    if (changes === 0) {
      throw new Deno.errors.Interrupted('error while creating the todo.')
    }

    return null
  } catch (error) {
    if (error instanceof Error) return error
    throw new Error('an unexpected error happened, please try again!')
  } finally {
    db.close()
  }
}
