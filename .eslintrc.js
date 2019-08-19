module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:prettier/recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        allowTypedFunctionExpressions: true
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
