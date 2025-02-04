export const options = [
  {
    name: 'help',
    alias: 'h',
    usage: '-h, --help',
    description: 'Displays the help menu and exits.'
  },
  {
    name: 'create',
    alias: 'c',
    usage: '-c, --create --title=<title>',
    description: 'Creates a new todo item. Requires the title argument.'
  },
  {
    name: 'read',
    alias: 'r',
    usage: '-r, --read [--id=<id>]',
    description:
      'Reads a specific todo by its ID. If no ID is provided, returns all todos.'
  },
  {
    name: 'update',
    alias: 'u',
    usage: '-u, --update --id=<id> --title=<new-title>',
    description:
      'Updates a todo item by its ID. Requires both the id and title arguments.'
  },
  {
    name: 'delete',
    alias: 'd',
    usage: '-d, --delete --id=<id>',
    description: 'Deletes a todo item by its ID.'
  }
]
