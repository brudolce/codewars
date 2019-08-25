const configuration = {
  license: 'MIT',
  name: 'codewars-katas',
  description: 'All my CodeWars katas',
  version: '0.0.1',
  author: {
    name: 'Leonardo Galante',
    email: 'lndgalante@gmail.com',
    url: 'https://leonardogalante.com',
  },
  dependencies: {
    lodash: '^4.17.5',
    ramda: '^0.25.0',
  },
  devDependencies: {
    '@types/jest': '^22.2.2',
    'eslint-config-prettier': '^2.9.0',
    'eslint-plugin-jest': '^21.13.0',
    husky: '^0.14.3',
    jest: '^22.4.4',
    prettier: '^1.11.1',
    xo: '0.18.2',
  },
  scripts: {
    lint: 'xo',
    test: 'jest',
    'test-watch': 'jest --watchAll',
    precommit: 'npm run lint && npm run test',
  },
  xo: {
    esnext: true,
    extends: ['prettier', 'plugin:jest/recommended'],
    ignores: ['boilerplate.js', 'boilerplate.test.js'],
  },
  prettier: {
    semi: false,
    tabWidth: 2,
    printWidth: 80,
    singleQuote: true,
    trailingComma: 'es5',
    eslintIntegration: true,
  },
  jest: {
    testPathIgnorePatterns: ['./boilerplate.js', './boilerplate.test.js'],
  },
}
