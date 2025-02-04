import { type Colors, colors } from '@/styles/colors.ts'

type Options = {
  color?: Colors
  bold?: boolean
}

export function logger(message: string, options?: Options) {
  if (!options) return console.log(message)

  let customization: string = ''

  if (options.color) {
    customization += `color: ${colors[options.color] || colors['white']};`
  }

  if (options.bold) {
    customization += `font-weight: bold;`
  }

  console.log(`%c${message}`, customization)
}
