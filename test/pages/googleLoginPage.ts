import { Page, expect } from '@playwright/test';
import { loginLocators } from '../locators/googleLogin.locators';

export class LoginPage {
  constructor(private page: Page) {}

  async clickGoogleLogin() {
    await this.page.click(loginLocators.googleLoginButton);
  }

  async verifyDashboardVisible() {
    // await expect(this.page.locator(loginLocators.dashboardHeader)).toBeVisible();
    await expect(this.page.getByText('Jobs', { exact: true })).toBeVisible({ timeout: 10000 });
  }
}