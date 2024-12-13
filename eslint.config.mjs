import { dirname }       from 'path'
import { fileURLToPath } from 'url'

import { FlatCompat }         from '@eslint/eslintrc'
import pluginStylistic        from '@stylistic/eslint-plugin'
import pluginAlignAssignments from 'eslint-plugin-align-assignments'
import pluginAlignImport      from 'eslint-plugin-align-import'
import pluginImport           from 'eslint-plugin-import'
import pluginTailwind         from 'eslint-plugin-tailwindcss'
import typescript             from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname  = dirname(__filename)
const compat     = new FlatCompat({ baseDirectory: __dirname })

const config = [ ...compat.extends('next/core-web-vitals', 'next/typescript') ]

export default typescript.config({ ignores: [ 'vendor' ], }, {
    extends : [ ...config, ...typescript.configs['recommended'], ...pluginTailwind.configs['flat/recommended'] ],
    files   : [ '**/*.{ts,tsx}' ],
    plugins : {
        '@stylistic'        : pluginStylistic,
        'align-import'      : pluginAlignImport,
        'align-assignments' : pluginAlignAssignments,
        'import'            : pluginImport,
        'tailwindcss'       : pluginTailwind,
    },
    rules: {
        '@stylistic/array-bracket-spacing'           : [ 'error', 'always' ],
        '@stylistic/comma-dangle'                    : [ 'error', 'always-multiline' ],
        '@stylistic/indent'                          : [ 'error', 4 ],
        '@stylistic/jsx-closing-tag-location'        : [ 'error' ],
        '@stylistic/jsx-curly-brace-presence'        : [ 'error', { 'props': 'always', 'propElementValues': 'always', 'children': 'never' } ],
        '@stylistic/jsx-curly-spacing'               : [ 'error', { 'when': 'never', 'children': true } ],
        '@stylistic/jsx-pascal-case'                 : [ 'error', { 'allowAllCaps': true } ],
        '@stylistic/jsx-props-no-multi-spaces'       : [ 'error' ],
        '@stylistic/jsx-sort-props'                  : [ 'error', { 'shorthandLast': true, 'callbacksLast': true } ],
        '@stylistic/jsx-tag-spacing'                 : [ 'error', { 'beforeSelfClosing': 'always', 'beforeClosing': 'never' } ],
        '@stylistic/key-spacing'                     : [ 'error', { 'beforeColon': true, 'afterColon': true, 'align': 'colon' } ],
        '@stylistic/no-mixed-spaces-and-tabs'        : [ 'error' ],
        '@stylistic/no-multiple-empty-lines'         : [ 'error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 } ],
        '@stylistic/no-whitespace-before-property'   : [ 'error' ],
        '@stylistic/padding-line-between-statements' : [ 'error', { 'blankLine': 'always', 'prev': '*', 'next': 'return' } ],
        '@stylistic/quotes'                          : [ 'error', 'single' ],
        '@stylistic/semi'                            : [ 'error', 'never' ],
        '@typescript-eslint/no-unused-expressions'   : [ 'off' ],
        'align-import/align-import'                  : [ 'error' ],
        'eol-last'                                   : [ 'error', 'always' ],
        'import/order'                               : [ 'error', {
            'alphabetize' : { 'order': 'asc', 'caseInsensitive': true },
            'groups'      : [ 'builtin', 'external', 'internal' ],
            'pathGroups'  : [ 
                { 'pattern' : 'next/*', 'group' : 'external', 'position' : 'before' }, 
                { 'pattern' : 'react', 'group' : 'external', 'position' : 'before' },
                { 'pattern' : '$/**',  'group' : 'internal', 'position' : 'before' },
                { 'pattern' : '@/**',  'group' : 'internal', 'position' : 'after' } 
            ],
            'pathGroupsExcludedImportTypes' : [ 'next', 'react' ],
            'newlines-between'              : 'always'
        }],
        'no-alert'          : [ 'error' ],
        'no-console'        : [ 'error', { 'allow': [ 'error' ] } ],
        'no-useless-concat' : [ 'off' ],
        'prefer-template'   : [ 'off' ]
    },
    settings : {
        tailwindcss : {
            callees : [ 'classNames', 'cva' ]
        },
    },
})
