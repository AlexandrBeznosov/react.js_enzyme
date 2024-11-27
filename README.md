# Sandbox: migrate React.JS component tests from Enzyme to React Test Library

## Task
Migrate Enzyme tests [eznyme.test.tsx](./src/tests/eznyme.test.tsx) to React Test Library [react-testing-library.test.tsx](./src/tests/react-testing-library.test.tsx)


## Prerequisites
- Install [Node.js v16.20.1](https://nodejs.org/en/download/current). The particular version is required.
- Install [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) package manager.

## Project initialization
1) Install dependencies: run following command in a terminal from the project's root folder
    ```
    yarn
    ```
2) Install project dependencies: run following command in a terminal from the project's root folder
    ```
    yarn install
    ```
3) Smoke test: run application in development mode to make sure it renders a button and a toggle.
    ```
    yarn start
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
    The page will reload if you make edits.\
    You will also see any lint errors in the console.


## Run tests
```
yarn test-watch
```
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

```
yarn test -u
```
Launches the test runner with snapshots update
