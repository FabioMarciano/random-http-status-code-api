# Random HTTP Status Code

Application that can return a random (or given) HTTP Status Code response.

# Version

See _version_ file at project's root folder.

# License

See _LICENSE_ file at project's root folder.

# Collaborators

- Fabio Marciano

# Features

- Typescript
- Jest for tests
- Coverage (via jest)
- Editor config
- Prettier
- ESLint
- Docker / Docker Compose
- Hot reload in development environment
- Dotenv (local environment variables)

# Services

## NodeJS

The NodeJS service is an NodeJS/Express/Alpine server.

### Environment variables

The following environment variables are available at **.env** file.

> **Important:**
>
> - The **.env** file must be considered **only in development environment**.

| Name        | Description                           | Default Value |
| ----------- | ------------------------------------- | ------------- |
| PORT        | The application port                  | 3000          |
| NODE_ENV    | The NodeJS environment's current name | dev           |
| API_BASE    | The application router base path      | /api          |
| STATIC_BASE | The application static base path      | /             |
| LOG_DIR     | The application log folder            | log           |

# Run and build

## Install

Before to start, you have to install all dependencies:

```shell
$ npm install
```

## Development

To run the application in development environment run:

```shell
$ npm run dev
```

## Build

To build the project for distribuition run:

```shell
$ npm run build
```

To run the final application run:

```shell
$ npm start
```

# Test

```shell
$ npm run test
```

> **Notes:**
>
> ---
>
> - The **src/index.ts** file was excluded from testing because it is not a typescript module.

## ESLint

```shell
$ npm run lint
```

## Coverage

```shell
$ npm run coverage
```

The results will be stored at _./coverage_ folder.

> **Notes:**
>
> ---
>
> - The **src/index.ts** file was excluded from coverage because it is not a typescript module.

# Usage

After install and run the applications you can request into the following endpoints (considering `localhost` as host on HTTP requests):

### Request:

```http
GET /api HTTP/1.1

Host: localhost
Port: 3000
```

### Response:

```http
HTTP/1.1 <code> <message>
```

> **Notes:**
>
> ---
>
> - `<code>` random HTTP Status Code.
> - `<message>` the random's HTTP Status Code message.

---
