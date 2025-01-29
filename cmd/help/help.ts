import { logger } from '../styles/logger.ts'

import { options } from './options.ts'
import { config } from '../config/config.ts'

export function help() {
  logger(`Usage: ${config.name} <options>`)
  logger(`Version: ${config.version}`, { color: 'orange' })
  logger(`\nDescription: ${config.description}`)
  logger('\nOptions:')
  console.table(options, ['usage', 'description'])
  Deno.exit(1)
}
