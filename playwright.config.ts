// "use strict";
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './test',
  use: {
    headless: false,
    trace: 'on',
  },
  reporter: [['html']],
});
