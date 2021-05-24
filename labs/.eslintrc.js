// eslint-disable-next-line no-undef
module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'no-console': 'off',
        'quotes': [ 'error', 'single' ],
        'comma-spacing': [
            'error', { 'before': false, 'after': true }]},
    'settings': {
        'react': {
            'version': 'detect'
        }
    }
};
