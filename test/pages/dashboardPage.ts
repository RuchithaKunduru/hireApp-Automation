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
}