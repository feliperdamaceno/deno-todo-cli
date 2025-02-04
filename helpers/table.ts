import Table from 'cli-table3'

type TableOptions = {
  dataset: Record<string, unknown>[]
  width?: number
}

export function table({ dataset, width = 50 }: TableOptions) {
  const head = Object.keys(dataset[0])
  const table = new Table({
    head,
    colWidths: Array(head.length).fill(width),
    wordWrap: true
  })

  dataset.forEach((data) => {
    table.push(Object.values(data).map((value) => String(value)))
  })

  console.log(table.toString())
}
