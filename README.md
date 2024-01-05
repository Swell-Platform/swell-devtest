# swell-devtest

A full-stack application using [NestJS](https://nestjs.com) with [Prisma](https://www.prisma.io/) and [React](https://reactjs.org) with [Material UI](https://mui.com/).

This project was generated using [Nx](https://nx.dev).

## TL;DR

1. Fork this repository on GitHub
2. Run `npm install`
3. Run `npm run setup`
4. Run `npm start`
5. Browse to [http://localhost:4200](http://localhost:4200/)

## Introduction

This project is a simple web app for full-stack developer candidates.

The project was generated using [Nx](https://nx.dev) to provide a modern integrated dev experience.

The app doesn't do much (yet)... that part is up to the applicant.

### Project Structure

The project is a simple Nx workspace with two applications, located in the `apps` directory.
For simplicity, we chose not to place code in libraries (`libs` directory), but if you are familiar with Nx,
you are more than welcome to refactor the code to use libraries.
There is also a `db` directory which contains a sample SQLite database seeded with some data,
and a `prisma` directory which contains the Prisma schema file.

```
swell-devtest
├── apps (backend and front end applications)
│   ├── reviews-api
│   │   └── src
│   ├── reviews-client
│   │   └── src
├── db (database files)
│   └── swell-sample.db
├── libs (Nx libraries [currently empty])
└── prisma (Prisma schema file)
    └── schema.prisma
```

## Getting Started

To get you started you can simply fork the [swell-devtest](https://github.com/Swell-Platform/swell-devtest) repository, clone it locally, and install the dependencies.

### Install Node

This project requires [Node](https://nodejs.org) for building and running the application.

We recommend using Node Version Manager (nvm) to manage your Node installations.
If you don't already have nvm installed, you can install it by following the instructions for your platform:

- [macOS/Linux](https://github.com/nvm-sh/nvm)
- [Windows](https://github.com/coreybutler/nvm-windows)

Once you have nvm installed, you can install Node v20 by running the following command:

```bash
nvm install 20.10.0
nvm use 20.10.0
```

### Install Dependencies

Run the following command to install the project dependencies:

```bash
npm install
```

### Create the Database

This project uses a simple [SQLite](https://www.sqlite.org/index.html) database.
A seeded database is include in the repository at `<projectRoot>/db/swell-sample.db`.
Before running the application, you will need to copy this file to `<projectRoot>/db/swell.db` by running the following command:

```bash
npm run setup
```

## Running the Application

The project contains both backend (`reviews-api`) and front end (`reviews-client`) applications.
To start both applications, run the following command:

```bash
npm start
```

This will start the backend API server on port 3333 and the front end application on port 4200.
The app will automatically reload if you change any of the source files.

The applications can also be run independently by running the following commands:

```bash
# Start the backend API server
npm run serve reviews-api

# Start the front end application
npm run serve reviews-client
```

### Backend Proxy

For convenience, the front end application is configured to proxy API requests to the backend API server.
When making requests to the API, you can use the relative path `/api`.

## Running Unit Tests

Tests are run using [Jest](https://jestjs.io).
Tests for each application can be run independently by running the following commands:

```bash
# Run unit tests for the backend API server
npm run test reviews-api

# Run unit tests for the front end application
npm run test reviews-client
```

### Running Tests in Watch Mode

To run the tests in watch mode, run the following command:

```bash
# Run unit tests for the backend API server in watch mode
npm run test reviews-api -- --watch

# Run unit tests for the front end application in watch mode
npm run test reviews-client -- --watch
```

### Code Coverage

To generate code coverage reports, run the following command:

```bash
# Generate code coverage reports for the backend API server
npm run test reviews-api -- --coverage

# Generate code coverage reports for the front end application
npm run test reviews-client -- --coverage
```

Coverage will be reported in the console after the tests run, and a detailed HTML report will be generated in the `coverage` directory.

### Test Affected Code

You can also run tests for all projects that have been affected by a change by running the following command:

```bash
npm run affected test
```

## Code Scaffolding

This project uses [Nx](https://nx.dev) to provide a modern integrated dev experience.
Nx includes a number of code generators that can be used to generate libraries, modules, controllers, services, components, etc.

Visit the [Nx Documentation](https://nx.dev/plugin-features/use-code-generators) to learn more.
