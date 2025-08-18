import { Given, When, Then } from '@cucumber/cucumber';
import { Browser, Page, BrowserContext } from 'playwright';
import { LoginPage } from '../pages/googleLoginPage';
import testData from '../test-data/urls.json';

let page: Page;
let context: BrowserContext;
let loginPage: LoginPage;

Given('user is authenticated using stored cookies', async function () {
  const loginPage = new LoginPage(this.page!);
  await this.page.goto(testData.baseUrl);
});

Then('user should see the dashboard page', async function () {
  const loginPage = new LoginPage(this.page!);
  await loginPage.verifyDashboardVisible();
});
