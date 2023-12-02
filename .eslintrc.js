module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'Text',
            importNames: ['react-native'],
            message: 'Please import the custom Text component',
          },
        ],
      },
    ],
  },
};
