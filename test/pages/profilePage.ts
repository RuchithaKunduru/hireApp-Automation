import test, { Page } from '@playwright/test';
import { profileLocators } from '../locators/profile.locators';

export class ProfilePage {
  constructor(private page: any) {}

  async clickProfileButton(){
    await this.page.click(profileLocators.profileButton);
  }
  
  async verifyProfileName(profileName:string){
    await this.page.locator(profileLocators.pName(profileName));
  }

  async clickGoBack(){
    await this.page.goBack();
  }

  async click3DotButton(dot:string){
    await this.page.click(profileLocators.dotButton(dot));
  }

  async verifySettings(settings:string){
    await this.page.locator(profileLocators.settingsPage(settings));
  }

  async clickEditButton(title: string){
    await this.page.click(profileLocators.editButton(title));
  }

  async enterQuestion(question:string){
    await this.page.click(profileLocators.questionType); // click textarea first
    await this.page.fill(profileLocators.questionType, question); // then fill
  }

  async enterTitle(title:string){
    await this.page.click(profileLocators.flagTitle);
    await this.page.fill(profileLocators.flagTitle, title);
  }

  async enterDescription(description:string){
    await this.page.click(profileLocators.flagDescription);
    await this.page.fill(profileLocators.flagDescription, description);
  }

  async enterWhenToApply(toApply:string){
    await this.page.click(profileLocators.flagToApply);
    await this.page.fill(profileLocators.flagToApply, toApply);
  }

  async enterWhenNotToApply(NotToApply:string){
    await this.page.click(profileLocators.flagNotToApply);
    await this.page.fill(profileLocators.flagNotToApply, NotToApply);
  }

  async clickPriority(priority:string){
    await this.page.click(profileLocators.priorityButton);
  }

  async clickScope(){
    await this.page.click(profileLocators.scopeButton);
  }

  async clickAddButton(){
    await this.page.click(profileLocators.addButton);
  }

} 