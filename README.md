# ReactJS SSR Movie Library

The project implemented a SPA application for creating, viewing and editing movie reviews. Implemented support for server rendering and custom webpack settings for building the application in various mods.

### Name templates

1. _Branch name_

   > feature/task-5_header-component<br>
   > fix/bug-4_incorrect-filename

2. _Commit message_

   > task-5: add styles for the header<br>
   > bug-4: fix the file extension

3. _PR title_

   > Task-15: Header component<br>
   > Bug-21: Incorrect filename

### Scripts

#### `npm run dev`

This command starts the project in **SSR** (server side rendering) mode. Open [localhost](http://localhost:3000) to view it in the browser.

#### `npm run spa:start`

This command starts the project in **SPA** (single page application) mode. Open [localhost](http://localhost:3000) to view it in the browser.

#### `npm run start`

This command builds the project for the **production** mode.

#### `npm run lint`

This command will run ESLint through all the .js, .ts, and .tsx (used with React) files. Any ESLint errors that can be automatically fixed will be fixed with this command, but any other errors will be printed out in the command line.

#### `npm run test`

This command will run all test suites using the Jest framework.

#### `npm run coverage`

This command will create a unit test coverage report for all files in the project.

#### `npm run cypress`

This command will start the e2e testing process. To run e2e tests:

1. Start the MoviesAPI.ReactJS server wit `npm start`.
2. Start the React App with `npm run dev`.
3. In a new terminal start the Cypress App with `npm run cypress`.
4. In the Cypress App select an option "E2E Testing".
5. Select the Chrome browser and click "Start E2E Testing in Chrome".
6. On th tab "Spec" run files `movie.spec.cy.ts` and `search.spec.cy.ts`.
