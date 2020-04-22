# fc-vo1-signup
![](https://github.com/gowda/fc-vo1-signup/workflows/lint-and-tests/badge.svg)
![](https://github.com/gowda/fc-vo1-signup/workflows/features/badge.svg)

multi-page signup application using react

## Usage
#### Install dependencies
```bash
$ npm install
```

#### Run development server
```
$ npm run server
```

Development server listens at [http://localhost:3000](http://localhost:3000).
Can be changed by updating [webpack.config.js](webpack.config.js).

#### Run linter
```bash
$ npm run lint
```

[ESLint](https://eslint.org/) is configured to extend from
[eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)
& [eslint-config-airbnb](https://github.com/airbnb/javascript)

Configuratin is in [.eslintrc.js](.eslintrc.js)

#### Run unit tests
```bash
$ npm run test
```

#### Run cucumber tests
```bash
$ npm run features
```

Server running at [http://localhost:3000](http://localhost:3000) is required
for cucumber tests. Run `webpack-dev-server` using:
```bash
$ npm run server
```

## Author

[Basavanagowda Kanur](https://github.com/gowda)
