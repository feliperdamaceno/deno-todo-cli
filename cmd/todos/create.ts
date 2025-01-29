import { logger } from '../styles/logger.ts'

export function create() {
  return logger('create', { color: 'blue' })
}
