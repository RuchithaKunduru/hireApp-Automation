import test, { Page } from '@playwright/test';
import { newJobLocators } from '../locators/createNewJob.locators';
import testData from '../test-data/jobDetails.json';

export class CreateNewJobPage {
  constructor(private page: any) {}

  async createNewJobButtonClick() {
    await this.page.click(newJobLocators.createNewJobButton);
  }

  async verifyRedirectedCreateJob(){
    await this.page.locator(newJobLocators.redirectedCreateJob);
  }

  async basicJobDetails() {
    await this.page.fill(newJobLocators.hiringRole, testData.jobDetails.hiringRole );
    await this.page.click(newJobLocators.practiceAreaDropDownButton);
    await this.page.click(newJobLocators.practiceAreaDropDownOption);
    await this.page.click(newJobLocators.expertise);
    await this.page.click(newJobLocators.location);
    await this.page.click(newJobLocators.employmentType);
  }

  async businessValueDetails() {
    await this.page.fill(newJobLocators.projectName, testData.businessValues.projectName);
    await this.page.fill(newJobLocators.clientName, testData.businessValues.clientName);
    await this.page.fill(newJobLocators.noOfRequirements, testData.businessValues['No.ofRequirements']);
  }

  async verifyBasicDetailsSaved() {
    await this.page.locator(newJobLocators.basicDetailsSavedMessage).isVisible();
    await this.page.waitForTimeout(2000); // Wait for the toast message to appear
  }

  async enterFoundationSkills(): Promise<void> {
    for (const skill of testData.skills.foundationalSkills) {
      const input = this.page.locator(newJobLocators.foundationalSkillsInput);
      await input.click(); // click to focus
      await input.fill(skill); // type skill
      await input.press('Enter'); // press Enter
    }
  }

  async enterBehaviouralSkills(){
    await this.page.locator(newJobLocators.behaviouralSkillsInput);
  }

  async enterAdvanceSkills(): Promise<void> {
    for (const skill of testData.skills.AdvanceSkills) {
      const input = this.page.locator(newJobLocators.advanceSkillsInput);
      await input.click(); // click to focus
      await input.fill(skill); // type skill
      await input.press('Enter'); // press Enter
    }
  }

  async verifyAllSkills(){
    await this.page.locator(newJobLocators.skillsSavedMessage);
  }

  async fillDiscoverySession() {
  const profileText = testData.discoverySession.candidateProfile.join('\n');
  await this.page.click(newJobLocators.discoverySessionInput); // click textarea first
  await this.page.fill(newJobLocators.discoverySessionInput, profileText); // then fill
}

  async selectTone(tone:string){
    await this.page.click(newJobLocators.selectTone(tone));
  }

  async verifyDiscoverySession(){
    await this.page.locator(newJobLocators.discoverySessionMessage);
    await this.page.waitForTimeout(10000);
  }

  async verifyJDSection(jdSection: string){
    await this.page.locator(newJobLocators.jobDescription(jdSection));
  }

   async clickButton(aSkill:string){
    await this.page.waitForTimeout(3000);
    await this.page.click(newJobLocators.clickButton(aSkill));
  }

  async enterRequirements(){
    const profileRequirement = testData.requirementDetails.enterRequirement;
    await this.page.click(newJobLocators.requirements); // click textarea first
    await this.page.fill(newJobLocators.requirements, profileRequirement); // then fill
  }

  async enterReason(placeholder: string){
    const reason= testData.explainReason.whyItMatters;
    await this.page.click(newJobLocators.enterReason(placeholder)); // click textarea first
    await this.page.fill(newJobLocators.enterReason(placeholder), reason); // then fill
  }

  async clickScore(score:string){
    await this.page.click(newJobLocators.scoreBox);
    await this.page.click(newJobLocators.selectScore(score));
  }

  async verifyTechnicalCompetence(){
    await this.page.locator(newJobLocators.technicalCompetence);
  }

  async clickDivButton(div:string){
    await this.page.click(newJobLocators.divButton(div), { force: true });
  }

  async waitTime(wait:string){
    await this.page.waitForTimeout(wait);
  }
  
}