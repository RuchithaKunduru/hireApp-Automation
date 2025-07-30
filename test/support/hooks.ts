import { Before, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';

setDefaultTimeout(120000); // 2 minutes

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
});
