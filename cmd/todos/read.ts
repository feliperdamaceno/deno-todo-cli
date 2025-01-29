import { logger } from '../styles/logger.ts'

export function read() {
  return logger('read', { color: 'blue' })
}
