# CODEGIG

A small full-stack project where you can publish a code gig, search based on the technologies and look at them as a list.

Originally this project was fully on NodeJS, but in order to practice, instead of rendering the views from the backend, the navigation is handled on the client while the server endpoints were turned into **REST endpoints** so the client can use them.

## SETUP

Once you have cloned this repo, you must follow this steps:

`npm install`

this command will install the depencencies for the server

Once you have done that, then it is time to install the client dependencies:

`npm run client:install`

Of course you can just change directory to the client folder and just run a simple `npm install`.

This project relies on a backend that connects to a **Postgres Database**. In order to use it as well as other system dependencies, make sure you have **Docker** installed and running, and execute de following command:

`docker-compose up`

Now that you have both your project and system depencies installed, to execute the project run it with:

`npm run start:dev`

## Run tests

For now, there are only tests on the client. Thus, you must move to the client directory and run the following command:

`npm run test`

## Technologies

- [NodeJS](https://nodejs.org)
- [ExpressJS](https://expressjs.com)
- [React JS](https://reactjs.org)
- [Typescript](https://typescriptlang.org)
- [Docker](https://docker.com)
- [PostgresSQl](https://postgresql.org)
- [Jest](https://jestjs.io)
- [React Testing Library](https://testing-library.com)
