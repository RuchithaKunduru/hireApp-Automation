import { expect, Page } from '@playwright/test';
import { viewdeatilsLocators } from '../locators/viewdeatils.locators';
import { dashbaordLocators } from '../locators/dashboard.locators';
export class editjdPage {
  constructor(private page: Page) {}

  async clickViewDetails() {
    await this.page.click(viewdeatilsLocators.viewdeatilsbutton);
  }

  async clickEditBasicDetails() {
    await this.page.click(viewdeatilsLocators.editbasicdeatilsbutton);
  }

  async selectExpertiseMidLevel() {
    await this.page.click(viewdeatilsLocators.expertiesmidlevel);
  }

  async selectLocation() {
    await this.page.click(viewdeatilsLocators.location);
  }

  async saveChanges() {
    await this.page.click(viewdeatilsLocators.savechangesbutton);
  }

  async confirmSaveChanges() {
        await this.page.click(viewdeatilsLocators.confirmsavechangesbutton);
    }
   // verifications
    async getExpertiseValue(): Promise<string> {
        return (await this.page.textContent(viewdeatilsLocators.expertiesmidlevel))?.trim() || "";
    }

    async getLocationValue(): Promise<string> {
        return (await this.page.textContent(viewdeatilsLocators.location))?.trim() || "";
    }
    async clickRegenerateButton() {
        await this.page.click(viewdeatilsLocators.regeneratebutton);
    }
    async clickYesButton() {
        await this.page.click(viewdeatilsLocators.yesButton);
    }
    async clickVideoResumeButton() {
        await this.page.click(dashbaordLocators.videoresumebutton);
    }
    async clickBackButton() {
        await this.page.click(dashbaordLocators.backbutton);
    }
    async clickResumeButton() {
        await this.page.click(dashbaordLocators.resumebutton);
    }
    
}