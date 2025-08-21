import { Page, expect } from "@playwright/test";
import { resumeLocators } from "../locators/resume.locators";
import { newJobLocators } from "../locators/createNewJob.locators";
export class ResumePage {
  constructor(private page: Page) {}

  async verifyJobCards() {
    await this.page.locator(resumeLocators.jobCards);
  }
  async verifyJobCardTitle(title: string) {
    await this.page.locator(resumeLocators.jobCardTitle(title));
  }

  async waitForJobTitlesToLoad() {
    await this.page.waitForSelector(resumeLocators.headerElement, {
      timeout: 10000,
    });
  }

  async clickResumeVettingButton(jobTitle: string) {
    await this.waitForJobTitlesToLoad(); // Make sure titles are present

    const jobTitleElements = await this.page.$$(resumeLocators.headerElement);
    const jobTitles = await Promise.all(
      jobTitleElements.map((el) => el.textContent())
    );

    const index = jobTitles.findIndex(
      (title) => title?.trim() === jobTitle.trim()
    );

    const tooltipLocator = `(//a[@ptooltip="AI Resume Vetting"])[${index}]`;
    const linkHandle = await this.page.locator(tooltipLocator).elementHandle();
    if (linkHandle) {
      // Remove target attribute safely
      await this.page.evaluate(
        (el) => el.removeAttribute("target"),
        linkHandle
      );
      // Click and wait for navigation
      await Promise.all([this.page.waitForNavigation(), linkHandle.click()]);
    } else {
      console.error(`:x: Link not found for locator: ${tooltipLocator}`);
    }
  }

  async verifyResumePage() {
    await this.page.waitForLoadState("networkidle"); // optional but helpful
    await this.page.waitForSelector(resumeLocators.resumePage, {
      timeout: 10000,
    });
  }

  async selectResumeSource(source: string) {
    await this.page.click(resumeLocators.resumeSourceDropdown);

    const sourceLocator = resumeLocators.sourceDropdownOption(source);
    await this.page.waitForSelector(sourceLocator, {
      state: "visible",
      timeout: 10000,
    });
    await this.page.click(sourceLocator);
  }

  async selectStatus(status: string) {
    await this.page.click(resumeLocators.statusDropdown);
    const statusLocator = resumeLocators.statusDropdownOption(status);
    await this.page.waitForSelector(statusLocator, {
      state: "visible",
      timeout: 10000,
    });
    await this.page.click(statusLocator);
  }

  async selectSortOption(sort: string) {
    await this.page.click(resumeLocators.sortDropdown);
    const sortLocator = resumeLocators.sortDropdownOption(sort);
    await this.page.waitForSelector(sortLocator, {
      state: "visible",
      timeout: 10000,
    });
    await this.page.click(sortLocator);
  }

  async verifyResumeTable() {
    await this.page.locator(resumeLocators.resumeTable);
  }

  async verifyAddNotes() {
    await this.page.locator(resumeLocators.addNotes);
  } 

  async enterNotes(notes: string) {
    await this.page.fill(resumeLocators.enterNotes, notes);
  }

  async clickSaveNotesButton(saveNotes: string) {
    await this.page.click(resumeLocators.saveNotesButton(saveNotes));
  }

  async verifyUpdatedNoteMessage(){
    await this.page.locator(resumeLocators.updateNoteMessage).isVisible();
  }
  
  async clickDeleteNotesButton(){
    await this.page.locator(resumeLocators.deleteNotesButton).click();
  }

  async verifyDeletedNoteSection(){
    await this.page.locator(resumeLocators.deleteNoteMessage).isVisible();
  }

  async verifyAddedNoteSection() {
    await this.page.locator(resumeLocators.addedNoteSection)
  }

  async clickEditNotesButton() {
    await this.page.click(resumeLocators.editNotesButton);
  }

  async enterUpdatedNotes(uNotes: string) {
    await this.page.fill(resumeLocators.enterUpdatedNotes, uNotes);
  }

  async clickEmail(email: string) {
    const viewResumeButton = this.page.locator(resumeLocators.emailButton(email));
    await viewResumeButton.click();
    await this.page.waitForLoadState("networkidle"); // Wait for the page to load after clicking
  }

  async verifyCandidateDetails(){
    await this.page.locator(resumeLocators.candidateDetails);
  }

  async clickTooltipButton(button: string) {
    await this.page.click(resumeLocators.tooltipButton(button), { force: true });
  }

  async verifyUpdateCandidateForm() {
    await this.page.locator(resumeLocators.candidateForm);
  }

  async enterUpdatedCandidateName(uName: string) {
    await this.page.fill(resumeLocators.updatedcandidateName, uName);
  }

  async clickUpdateButton(button1: string) {    
    // await this.page.click(resumeLocators.updateButton(button1));
    await this.page.setViewportSize({ width: 1920, height: 1080 });   
    await this.page.locator(resumeLocators.updateButton(button1)).click({ force: true });

  }  

  async clickViewResumeButton() {
    await this.page.click(resumeLocators.viewResumeButton);
  }
  
  async verifyResumeFile() {

    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
    ]);

    await newPage.waitForLoadState('networkidle');

    // ✅ Validate URL
    expect(newPage.url()).toContain('hire-app-resume-bucket');

    await newPage.close(); // Close the new page after verification
  }

  async verifySuccessMessage(message: string) {
    const successMessage = await this.page.locator(resumeLocators.successMessage(message));
    await expect(successMessage).toBeVisible({ timeout: 5000 });
  }

  async verifySections(section: string) {
    await this.page.locator(resumeLocators.differentSections(section));
    await this.page.locator(resumeLocators.addedQuestionrow);
  }

  async verifyResumeSummaryDetails() {
    await this.page.locator(resumeLocators.resumeSummaryDetails);
  }

  async verifyConcernsDetails() {
    await this.page.locator(resumeLocators.resumeConcernsDetails);
  }

  async verifySkills(skills: string){
    await this.page.locator(resumeLocators.techSkills(skills));
  }

  async clickChevronArrow(){
    await this.page.click(resumeLocators.chevronArrow);
  }

  async enterQuestion(question: string) {
    await this.page.fill(resumeLocators.enterQuestion, question);
  }

  async verifyRemovedQuestion() {
    const questionLocator = this.page.locator(resumeLocators.removedQuestion);
    const isVisible = await questionLocator.isVisible();
    if (isVisible) {
      throw new Error("Added question is still visible, but it should have been removed.");
    }
  }


}
