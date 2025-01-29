type Config = {
  name: string
  description: string
  version: string
  database: string
}

export const config: Config = {
  name: 'todo-cli',
  description: 'A CLI tool to manage todos.',
  version: '1.0.0',
  database: './db/database.sql'
}
