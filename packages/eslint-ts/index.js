/** @type {import('eslint').Linter.BaseConfig} **/
module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    rules: {
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/ban-types': [
            'error',
            {
                extendDefaults: true,
                types: {
                    '{}': false,
                },
            },
        ],
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'no-unused-vars': 'error',
    },
    env: {
        node: true,
    },
    parserOptions: {
        ecmaVersion: 'latest',
    },
    // 配置json规则 https://www.npmjs.com/package/jsonc-eslint-parser
    overrides: [
        {
            files: ['*.json', '*.json5'], // Specify the extension or pattern you want to parse as JSON.
            parser: 'jsonc-eslint-parser', // Set this parser.
        },
    ],
};
