import { logger } from '@/helpers/logger.ts'

import { options } from '@/cmd/help/options.ts'
import { config } from '@/config/config.ts'
import { table } from '@/helpers/table.ts'

export function help() {
  logger(`Usage: ${config.name} <options>`)
  logger(`Version: ${config.version}`, { color: 'orange' })
  logger(`\nDescription: ${config.description}`)
  logger('\nOptions:')
  table({
    dataset: options.map(({ usage, description }) => ({ usage, description }))
  })
  Deno.exit(1)
}
