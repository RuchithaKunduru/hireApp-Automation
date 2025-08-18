import { Page, expect } from '@playwright/test';
import { loginLocators } from '../locators/googleLogin.locators';

export class LoginPage {
  constructor(private page: Page) {
    this.page = page;
  }

  async clickGoogleLogin() {
    await this.page.click(loginLocators.googleLoginButton);
  }

  async verifyDashboardVisible() {
    await this.page.locator(loginLocators.dashboardHeader);
  }
}