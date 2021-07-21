module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ['./tsconfig.json'], // Specify it only for TypeScript files
  },
  plugins: ["@typescript-eslint", 'import'],
  extends: ['airbnb-typescript/base'],
  rules: {
    'max-len': 'off',
    'no-console': 'off',
    semi: [2, 'always', { omitLastInOneLineBlock: true }],
    'function-paren-newline': ['error', 'never'],
    'import/prefer-default-export': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'operator-assignment': 1,
    'no-unused-vars': 'off',
    'prefer-destructuring': 'off',
    'linebreak-style': 'off',
    '@typescript-eslint/no-extra-semi': 'off',
    'class-methods-use-this': 'off',
    'no-restricted-syntax': 'off',
    'radix': 'off',
    '@typescript-eslint/no-use-before-define': 'off'
  }
}
