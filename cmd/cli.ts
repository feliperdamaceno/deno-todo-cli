import { parseArgs } from '@std/cli'

import { help } from './help/help.ts'
import { options } from './help/options.ts'

import { create } from './todos/create.ts'
import { getAll, getById } from './todos/read.ts'
import { update } from './todos/update.ts'
import { del } from './todos/delete.ts'

import { initialize } from '../db/client.ts'

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
    return create(args.title)
  }

  if (args.read) {
    if (!args.id) return getAll()
    getById(args.id)
  }

  if (args.update) return update()
  if (args.delete) return del()
}

if (import.meta.main) {
  main()
}
