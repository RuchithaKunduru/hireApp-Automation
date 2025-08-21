import { expect, Page } from '@playwright/test';
import { dashbaordLocators } from '../locators/dashboard.locators';
import {searchText,expectedATMEmail} from '../test-data/dashbaord.json';
export class DashboardPage{
  constructor(private page: any) {}


async plusbuttonclick() {
    await this.page.click(dashbaordLocators.plusbutton);
  }

async openselectatmpopup() {
    await this.page.click(dashbaordLocators.selectAtm);
  }

async searchbarinput(searchText: string) {
    await this.page.fill(dashbaordLocators.searchbar, searchText);
  }
async selectAtmName() {
    await this.page.click(dashbaordLocators.selectAtmname);
}

 async validateAtmEmail(expectedEmail: string) {
    const actualEmail = (await this.page.locator(dashbaordLocators.atmEmail).textContent())?.trim();
    expect(actualEmail).toBe(expectedATMEmail);
  }
async clickDoneButton() {
    await this.page.click(dashbaordLocators.Donebutton);
  }
async selectingtheATM() {
    await this.page.click(dashbaordLocators.selectingtheATM);
  }
async clickViewerButton() {
    await this.page.click(dashbaordLocators.viewerbutton);
  }
async clickRemoveAccessButton() {
    await this.page.click(dashbaordLocators.Removeaccessbutton);
  }
  //transfer ownership
async owneraccessplusbutton() {
    await this.page.click(dashbaordLocators.owneraccessplusbutton);
  }
async editoraccessbutton() {
    await this.page.click(dashbaordLocators.editoraccessbutton);
  }
  async transforownwershipbutton() {
    await this.page.click(dashbaordLocators.transforownwershipbutton);
  }
async yesbutton() {
    await this.page.click(dashbaordLocators.yesbutton);
  } 

  //copying the JD and Video resume link
async copybutton() {  
    await this.page.click(dashbaordLocators.copybutton);
  }           
async copyjdlink() {
    await this.page.click(dashbaordLocators.copyjdlink);
  }     
async copyvideoresumelink() {
    await this.page.click(dashbaordLocators.copyvideoresumelink);
  }

//archiving the job
async threeDotsButton() {
    await this.page.click(dashbaordLocators.threeDotsButton);
  }   
async archiveButton() {
    await this.page.click(dashbaordLocators.archiveButton);
  }
// redirection of the resume and video resume
async clickVideoResumeButton() {  
    await this.page.click(dashbaordLocators.videoresumebutton);
  }   
async clickResumeButton() {  
    await this.page.click(dashbaordLocators.resumebutton);
  }
async clickBackButton() {  
    await this.page.click(dashbaordLocators.backbutton);
  }
async verifyUrlContains(expected: string) {
    await this.page.waitForLoadState("domcontentloaded");
    const currentUrl = this.page.url();
    expect(currentUrl).toContain(expected);
  }
// filter functionality
async jobCategoryDropdown() {
  await this.page.waitForSelector(dashbaordLocators.jobCategoryDropdown, { state: "visible", timeout: 30000 });
  await this.page.click(dashbaordLocators.jobCategoryDropdown);
  await this.page.waitForTimeout(1000); // for user visibility
}
async aiEngineering() {
  await this.page.waitForSelector(dashbaordLocators.aiEngineeringOption, { state: "visible", timeout: 30000 });
  await this.page.click(dashbaordLocators.aiEngineeringOption);
  await this.page.waitForTimeout(1000);
}
async getAppliedJobCategory(): Promise<string> {
    return await this.page.textContent(dashbaordLocators.appliedJobCategory);
    await this.page.waitForTimeout(2000);
  }

// ✅ Print all job role names
async getAllJobRoleNames(): Promise<string[]> {
  const roles = await this.page.$$eval(
    dashbaordLocators.allJobRoleNames,
    (elements: Element[]) => elements.map(el => el.textContent?.trim() || "")
  );
  console.log("Job Roles found:", roles);
  return roles;
}

// ✅ Check if a specific job role exists
async jobRoleExists(roleName: string): Promise<boolean> {
  return await this.page.isVisible(dashbaordLocators.jobRoleName(roleName));
}

// ✅ Get the text of a specific job role
async getJobRoleByName(roleName: string): Promise<string | null> {
  const locator = this.page.locator(dashbaordLocators.jobRoleName(roleName));

  // ✅ Wait until it's visible in DOM
  await locator.waitFor({ state: "visible", timeout: 30000 });

  const text = await locator.textContent();
  console.log(`Job Role found for '${roleName}':`, text);

  // ✅ Trim to avoid whitespace mismatch
  return text?.trim() || null;
}
async resetButton() {
  await this.page.waitForSelector(dashbaordLocators.resetButton, { state: "visible", timeout: 30000 });
  await this.page.click(dashbaordLocators.resetButton);
  await this.page.waitForTimeout(1000);
}
async getSelectedJobCategory() {
  return await this.page.textContent(dashbaordLocators.jobCategoryDropdown);
}



//search functionality
async searchJobRole(searchText: string) {
  console.log(`🔍 Searching for: '${searchText}'`);
  const searchBar = this.page.locator(dashbaordLocators.SearchBar);
  await searchBar.fill(searchText);
  await this.page.waitForSelector(dashbaordLocators.allJobRoleNames);
  const roles = await this.getAllJobRoles();
  console.log("Roles after search:", roles);
  return roles;
}


// helper function for the search functionality
async getAllJobRoles(): Promise<string[]> {
  const jobRoleElements = this.page.locator(dashbaordLocators.allJobRoleNames);
  const count = await jobRoleElements.count();
  const roles: string[] = [];

  for (let i = 0; i < count; i++) {
    const role = await jobRoleElements.nth(i).textContent();
    if (role) {
      roles.push(role.trim());
    }
  }

  console.log("Job Roles found:", roles);
  return roles;
}

}