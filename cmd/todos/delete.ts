import { db } from '@/db/client.ts'

export function deleteById(id: string): null | Error {
  try {
    const changes = db.exec('DELETE FROM todos WHERE id = ?', id)

    if (changes === 0) {
      throw new Deno.errors.Interrupted(`error while deleting the todo ${id}.`)
    }

    return null
  } catch (error) {
    if (error instanceof Error) return error
    throw new Error('an unexpected error happened, please try again!')
  } finally {
    db.close()
  }
}
