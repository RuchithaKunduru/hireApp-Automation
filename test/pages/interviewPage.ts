import test, { Page } from '@playwright/test';
import { interviewLocators } from '../locators/interview.locators';
import testData from '../test-data/jobDetails.json';
import { newJobLocators } from '../locators/createNewJob.locators';

export class InterviewPage {
  constructor(private page: any) {}

  async verifyInterview(interview: string) {
    await this.page.click(interviewLocators.verifyInterview(interview));
  }

  async verifyL2Details(){
    await this.page.locator(interviewLocators.l2Interview);
  }

  async verifyL1Details(){
    await this.page.locator(interviewLocators.l1Interview);
  }
  
  async clickCopyLinkButton(){
    await this.page.click(interviewLocators.copyLinkButton);
  }

  async copyLinkMessage(){
    await this.page.locator(interviewLocators.copyLinkMsg);
  }

  async selectDate(){
    await this.page.click(interviewLocators.dateSchedule);
  }

  async selectStartTime(){
    await this.page.click(interviewLocators.startTimeSchedule);
  }

  async clickTimeButton(time:string){
    await this.page.click(interviewLocators.timeButton(time));
  }

  async selectEndTime(){
    await this.page.click(interviewLocators.endTimeSchedule);
  }

  async enterMeetingSubject(subject:string){
    await this.page.click(interviewLocators.meetingSubject);
    await this.page.fill(interviewLocators.meetingSubject, subject);
  }

  async enterInterviewer(iName:string){
    await this.page.fill(interviewLocators.interviewerName, iName);
    await this.page.keyboard.press('Enter');
  }

  async clickNotification(){
    await this.page.click(interviewLocators.notificationButton);
    await this.page.waitForTimeout(5000);
  }

  async verifyNotification(){
    await this.page.locator(interviewLocators.notification);
  }

  async clickCloseButton(){
    await this.page.click(interviewLocators.closeButton);
    await this.page.goBack();
  }

  async clickDeleteConfirmationPopup(del:string) {
    await this.page.click(interviewLocators.deleteConfirmationPopup);
  }

  async verifyDeleteInterview(){
    await this.page.locator(interviewLocators.deleteInterview).isVisible();
  }
}  