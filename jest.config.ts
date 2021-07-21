module.exports = {
  preset: 'ts-jest',
  testMatch: ['<rootDir>/test/**/*(*.)+(test).+(ts)'],
  setupFiles: [
    'dotenv/config'
  ],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: ['ts', 'js'],
};
// testMatch: [ "**/__test__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)" ],
// todo: enable test coverage https://stackoverflow.com/questions/50259025/using-env-files-for-unit-testing-with-jest/54282600
