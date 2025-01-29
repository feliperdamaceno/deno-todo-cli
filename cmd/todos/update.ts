import { logger } from '../styles/logger.ts'

export function update() {
  return logger('update', { color: 'blue' })
}
