import stylistic from '@stylistic/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['src/**/*.ts', 'test/**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // Blank line before return, and around control-flow / declaration blocks.
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: '*', next: ['if', 'for', 'while', 'switch', 'try', 'function', 'class'] },
        { blankLine: 'always', prev: ['if', 'for', 'while', 'switch', 'try', 'function', 'class'], next: '*' },
      ],
      // Blank line between class members, unless they're single-line and adjacent.
      '@stylistic/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
      // No blank line right after `{` or right before `}`.
      '@stylistic/padded-blocks': ['error', 'never'],
      // Collapse consecutive blank lines to at most 1, none at start/end of file.
      '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
      // Ensure exactly one trailing newline at end of file.
      '@stylistic/eol-last': ['error', 'always'],
    },
  },
];
