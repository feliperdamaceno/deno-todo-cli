import { logger } from '../styles/logger.ts'

import { options } from './options.ts'

export function help(): void {
  logger('Usage: todo-cli <options>')
  logger('Version: 1.0.0', { color: 'orange' })
  logger('\nOptions:')
  console.table(options)
  Deno.exit(1)
}
