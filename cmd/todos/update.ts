import { db } from '@/db/client.ts'
import { Todo } from '@/db/schema.ts'

import { deleteById } from '@/cmd/todos/delete.ts'

type Changable = Partial<Pick<Todo, 'title' | 'completed'>>

export function updateById(id: string, fields: Changable): null | Error {
  let changes = 0
  try {
    if (fields.title) {
      changes += db.exec(
        'UPDATE todos SET title = ? WHERE id = ?',
        fields.title,
        id
      )
    }

    if (fields.completed) {
      changes += db.exec(
        'UPDATE todos SET completed = ? WHERE id = ?',
        fields.completed,
        id
      )
      const error = deleteById(id)
      if (error) throw error
    }

    if (changes === 0) throw new Error('error while updating the todo.')

    return null
  } catch (error) {
    if (error instanceof Error) return error
    throw new Error('an unexpected error happened, please try again!')
  } finally {
    db.close()
  }
}
