import { setDefaultTimeout, Before, After, AfterAll } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { CustomWorld } from './custom-world';

setDefaultTimeout(120000);

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: false });
  await this.initBrowser();
});

// After(async function (this: CustomWorld) {
//   await this.closeBrowser();
// });