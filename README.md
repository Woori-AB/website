# Woori website

## Developer setup

The easiest way to get started is to use the development container provided with this project.

1. Install [**Visual Studio Code**](https://code.visualstudio.com/) and the [**Dev Containers**](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension.
2. Clone and open this repository with [**Visual Studio Code**](https://code.visualstudio.com/).
3. Start the **Dev container** by clicking **"Reopen in container"** when prompted (or choose `Dev Containers: Reopen in Container` via the `F1` menu)

## Quick script reference

| Npm script                   | Description                                                                                                     |
| ---------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `npm run dev`                | Starts a local development server at port `3000`. Access it at [`http://localhost:3000`](http://localhost:3000) |
| `npm run lint`               | Checks the source code for coding errors and enforces style rules                                               |
| `npm run test`               | Runs automated tests to verify that the source code produces expected results                                   |
| `npm run test:unit:coverage` | Runs the automated tests and generates a code coverage report to check how much of the code is tested           |
| `npm run build`              | Compiles the source code into static files that are ready for deployment or publishing                          |
| `npm run start`              | Starts the website using the compiled static files (must run `npm run build` first).                            |

_See [`package.json`](package.json) for complete list of available npm scripts._

## Debugging

Use the **Run and Debug** panel in [**Visual Studio Code**](https://code.visualstudio.com/) to

- Start the local development server with debugger attached.
- Run tests with the debugger attached.
