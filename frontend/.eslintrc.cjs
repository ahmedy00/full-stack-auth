module.exports = {
    parser: 'vue-eslint-parser',
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/base',
        '@nuxt/eslint-config',
    ],
    rules: {
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'object-curly-spacing': ['error', 'always'],
        'vue/component-tags-order': [
            'error',
            {
                order: ['script', 'template', 'style'],
            },
        ],
        'vue/multi-word-component-names': 'off',
        'vue/no-empty-component-block': 'error',
        'vue/attributes-order': [
            "error",
            {
                order: [
                    'CONDITIONALS',
                    'LIST_RENDERING',
                    'RENDER_MODIFIERS',
                    'TWO_WAY_BINDING',
                    'OTHER_DIRECTIVES',
                    'CONTENT',
                    'EVENTS',
                    'DEFINITION',
                    ['UNIQUE', 'SLOT'],
                    'GLOBAL',
                    'OTHER_ATTR',
                ],
                alphabetical: false,
            },
        ],
    }
}