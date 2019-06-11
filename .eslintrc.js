module.exports = {
   parser: '@typescript-eslint/parser',
   extends: [
      'plugin:@typescript-eslint/recommended',
      'prettier/@typescript-eslint'
   ],
   parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module'
   },
   rules: {
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off'
   }
};
