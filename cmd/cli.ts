import { parseArgs } from '@std/cli'

import { help } from './help/help.ts'
import { options } from './help/options.ts'

import { create } from './todos/create.ts'
import { read } from './todos/read.ts'
import { update } from './todos/update.ts'
import { del } from './todos/delete.ts'

function main() {
  const flags = parseArgs(Deno.args, {
    alias: options.reduce<{ [key: string]: string }>((aliases, option) => {
      aliases[option.name] = option.alias
      return aliases
    }, {})
  })

  if (flags.help) return help()
  if (flags.create) return create()
  if (flags.read) return read()
  if (flags.update) return update()
  if (flags.delete) return del()

  console.log(
    'invalid command! please try again with one of the options below:\n'
  )
  help()
}

if (import.meta.main) {
  main()
}
