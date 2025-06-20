import { defineConfig, globalIgnores } from 'eslint/config';
import ts from 'eslint-config-cheminfo-typescript/base';

export default defineConfig(globalIgnores(['lib']), ts, {
  files: ['benchmark/**'],
  rules: {
    'no-console': 'off',
  },
});
