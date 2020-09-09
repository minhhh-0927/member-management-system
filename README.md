# NestJS + TypeORM Example

## Installation

```bash
$ yarn install
```

## Create migration file

```shell script
yarn typeorm migration:create -n PostRefactoringrun -d src/migrations
```

Migrate

```shell script
yarn build
ts-node ./node_modules/typeorm/cli.js migration:run
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# incremental rebuild (webpack)
$ yarn webpack
$ yarn start:hmr

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

  Nest is [MIT licensed](LICENSE).
