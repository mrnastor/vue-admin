const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/client/$1',
    "\\.(styl)$": "<rootDir>/node_modules/jest-css-modules"
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/jest-vue-preprocessor'
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e'
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  "coverageReporters": [
    "html",
    "text-summary"
  ],
  collectCoverageFrom: [
    'client/**/*.{js,vue}',
    '!client/main.js',
    '!client/router/index.js',
    '!**/node_modules/**'
  ]
}
