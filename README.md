## Deno Todo CLI

A simple command-line tool for managing todo items, built with Deno 2 and
SQLite. This tool allows users to create, read, update, and delete todo items
via the command line.

### Requirements

To use the project, you need to have [Deno 2](https://deno.land/) installed on
your system. You can follow the installation guide on the Deno website.

### Building the Project

To build the project and create a executable binary, use the following command:

```bash
deno run build
```

This will compile the project code into a binary and output the result in the
build folder.

Run the CLI, just execute the binary directly via:

```bash
./build/todo-cli <command>
```

The binary allows you to interact with the tool without needing Deno installed
on the target machine.

## Commands

Here are the available commands:

### Help

Displays the help menu and exits.

```bash
./build/todo-cli --help
```

### Create Todo

Creates a new todo item with the provided **title**.

```bash
./build/todo-cli --create --title=<title>`
```

### Read Todos

Reads all todos.

```bash
./build/todo-cli --read
```

To read a specific todo:

```bash
./build/todo-cli --read --id=<id>
```

### Update Todo

Updates a todo item by its **id**. Requires both the **id** and the **title** or
**completed** fields.

```bash
./build/todo-cli --update --id=<id> --title=<title>
```

### Delete Todo

Deletes a todo item by the give **id**.

```bash
./build/todo-cli --delete --id=<id>
```

## Licence

This is an open-source project and is available under the
[**MIT License**](LICENSE). You are free to use, modify, and distribute the code
in accordance with the terms of the license.

## Contributors

Contributions are highly appreciated! If you encounter any issues or have
suggestions for improvements, please feel free to open an issue or submit a pull
request.

[feliperdamaceno](https://github.com/feliperdamaceno)

## Contact me

Linkedin: [feliperdamaceno](https://www.linkedin.com/in/feliperdamaceno)
