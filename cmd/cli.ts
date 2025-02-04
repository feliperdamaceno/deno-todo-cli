import { parseArgs } from '@std/cli'

import { help } from '@/cmd/help/help.ts'
import { options } from '@/cmd/help/options.ts'

import { create } from '@/cmd/todos/create.ts'
import { getAll, getById } from '@/cmd/todos/read.ts'
import { updateById } from '@/cmd/todos/update.ts'
import { deleteById } from '@/cmd/todos/delete.ts'

import { initialize } from '@/db/client.ts'
import { logger } from '@/helpers/logger.ts'
import { table } from '@/helpers/table.ts'

function main() {
  initialize()

  const args = parseArgs(Deno.args, {
    alias: options.reduce<{ [key: string]: string }>((aliases, option) => {
      aliases[option.name] = option.alias
      return aliases
    }, {})
  })

  if (args.help) return help()

  if (args.create) {
    if (!args.title) {
      return logger('please provide a valid --title.', { color: 'red' })
    }
    const error = create(args.title)
    if (error) return logger(error.message, { color: 'red' })
    return logger('todo sucessfully created', { color: 'green' })
  }

  if (args.read) {
    if (!args.id) {
      const [todos, error] = getAll()
      if (error) return logger(error.message, { color: 'red' })
      return table({ dataset: todos, width: 20 })
    }

    const [todo, error] = getById(args.id)
    if (error) return logger(error.message, { color: 'red' })
    return table({ dataset: [todo], width: 20 })
  }

  if (args.update) {
    if (!args.id) return logger('please provide a valid --id', { color: 'red' })
    return updateById()
  }

  if (args.delete) {
    if (!args.id) return logger('please provide a valid --id', { color: 'red' })
    const error = deleteById(args.id)
    if (error) return logger(error.message, { color: 'red' })
    return logger('todo sucessfully deleted', { color: 'green' })
  }
}

if (import.meta.main) {
  main()
}
