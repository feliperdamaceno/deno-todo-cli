export type Todo = {
  id: number
  title: string
  completed: boolean
}

export const TodoSchema = `
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    completed BOOLEAN
  );
`
