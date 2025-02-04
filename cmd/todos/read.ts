import { db } from '@/db/client.ts'
import { Todo } from '@/db/schema.ts'

export function getAll(): [Todo[], null] | [null, Error] {
  let stmt
  try {
    stmt = db.prepare('SELECT * FROM todos')
    const todos = stmt.all<Todo>()
    return [todos, null]
  } catch (error) {
    if (error instanceof Error) return [null, error]
    throw new Error('Unexpected error happened, please try again!')
  } finally {
    stmt?.finalize()
    db.close()
  }
}

export function getById(id: number): [Todo, null] | [null, Error] {
  let stmt
  try {
    stmt = db.prepare('SELECT * FROM todos WHERE id = ?')
    const todo = stmt.get<Todo>(id)

    if (!todo) {
      throw new Deno.errors.NotFound(`Todo with --id=${id} not found`)
    }

    return [todo, null]
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) return [null, error]
    if (error instanceof Error) return [null, error]
    throw new Error('Unexpected error happened, please try again!')
  } finally {
    stmt?.finalize()
    db.close()
  }
}
