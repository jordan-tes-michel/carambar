# carambar

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

# Blagues Carambar's API

Welcome on the Blagues Carambar's API repository! This API allows you to add qnd view Carambar's jokes.

## Contents

- [Features](#features)
- [Getting started](#getting-started)
- [API documentation](#api-documentation)
- [Licence](#licence)

## Features

- Add a new Carambar's joke.
- List all Carambar's jokes.
- View a specific Carambar's joke.
- View a random Carambar's joke.

## Getting started

Be sure you have Node.js and npm installed on your machine.

Clone this repository.

Install dependencies:

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

Run API:

```sh
npm run build
```

## Documentation

[Carambar API repository](https://github.com/jordan-tes-michel/carambar-api)

## API Documentation

- POST /blagues/add - Add a joke
- GET /blagues - Get all jokes
- GET /blagues/:id - Get one joke with its ID
- GET /blagues/random - Get a random joke

[Swagger Documentation](https://app.swaggerhub.com/apis-docs/JORDANMICHEL13/Carambar_API/1.0.0)