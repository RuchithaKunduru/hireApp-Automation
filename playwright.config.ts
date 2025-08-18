import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './test',
  reporter: [['html']],
  use: {
    headless: false,
    trace: 'on',
    geolocation: { latitude: 17.385, longitude: 78.4867 },
    permissions: ['geolocation'],
  },
});
