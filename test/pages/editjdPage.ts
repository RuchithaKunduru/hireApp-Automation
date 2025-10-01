import { expect, Page } from '@playwright/test';
import { viewDetailsLocators } from '../locators/viewdeatils.locators';
import { dashbaordLocators } from '../locators/dashboard1.locators';
export class EditJdPage {
  constructor(private page: Page) {}

  async clickViewDetails() {
    await this.page.click(viewDetailsLocators.viewDetailsButton);
  }

  async clickEditBasicDetails() {
    await this.page.click(viewDetailsLocators.editBasicDetailsButton);
  }

  async selectExpertiseMidLevel() {
    await this.page.click(viewDetailsLocators.expertiseMidLevel);
  }

  async selectLocation() {
    await this.page.click(viewDetailsLocators.location);
  }

  async saveChanges() {
    await this.page.click(viewDetailsLocators.saveChangesButton);
    // Assertion: confirm save button is no longer visible
  await expect(this.page.locator(viewDetailsLocators.confirmSaveChangesButton)).toBeHidden();
  }

  async confirmSaveChanges() {
        await this.page.click(viewDetailsLocators.confirmSaveChangesButton);
    }
   // verifications
    async getExpertiseValue(): Promise<string> {
        return (await this.page.textContent(viewDetailsLocators.expertiseMidLevel))?.trim() || "";
    }

    async getLocationValue(): Promise<string> {
        return (await this.page.textContent(viewDetailsLocators.location))?.trim() || "";
    }
    async clickRegenerateButton() {
        await this.page.click(viewDetailsLocators.regenerateButton);
    }
    async clickYesButton() {
        await this.page.click(viewDetailsLocators.yesButton);
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