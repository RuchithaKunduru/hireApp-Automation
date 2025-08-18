import { Given, When, Then } from "@cucumber/cucumber";
import { Browser, Page, BrowserContext } from "playwright";
import { ResumePage } from "../pages/resumePage";
import testData from "../test-data/urls.json";

let page: Page;
let context: BrowserContext;
let resumePage: ResumePage;
let button: string;

Given("user should see the job cards on dashboard page", async function () {
  await this.page.waitForTimeout(5000); // Ensure the page is loaded
  const resumePage = new ResumePage(this.page!);
  await resumePage.verifyJobCards();
});

When("user should see the job card title {string}", async function (title: string) {
  const resumePage = new ResumePage(this.page!);
  await resumePage.verifyJobCardTitle(title);
});



When('user clicks on {string} button for job title {string}', async function (tooltip: string, jobTitle: string) {
  const resumePage = new ResumePage(this.page!);
  await resumePage.clickResumeVettingButton(jobTitle);
});


Then("user should be able to see the Resume page", async function () {
  await this.page.waitForTimeout(5000); // Ensure the page is loaded
  const resumePage = new ResumePage(this.page!);
  await resumePage.verifyResumePage();
});

When("user selects {string} from the resume source dropdown",async function (source: string) {
  const resumePage = new ResumePage(this.page!);
  await resumePage.selectResumeSource(source);
});

When("user selects {string} from the status dropdown", async function (status: string) {
  const resumePage = new ResumePage(this.page!);
  await resumePage.selectStatus(status);
});

When("user selects {string} from the sort dropdown", async function (sort: string) {
  const resumePage = new ResumePage(this.page!);
  await resumePage.selectSortOption(sort);
});

When("user able to see all the resumes in the table", async function () {
  const resumePage = new ResumePage(this.page!);
  await resumePage.verifyResumeTable();
});

Then("user should be able to add Notes", async function () {
  const resumePage = new ResumePage(this.page!);
  await resumePage.verifyAddNotes();
});

When("user enters notes {string} in the notes field", async function (notes: string) {
  const resumePage = new ResumePage(this.page!);
  await resumePage.enterNotes(notes);
});

When("user click on {string} button of the notes", async function (saveNotes: string) {
  const resumePage = new ResumePage(this.page!);
  await resumePage.clickSaveNotesButton(saveNotes);
});

Then("user should be able to see the updated message", async function () {
  const resumePage = new ResumePage(this.page!);
  await resumePage.verifyUpdatedNoteMessage();
});

Given("user deletes the manage notes", async function () {
  const resumePage = new ResumePage(this.page!);
  await resumePage.clickDeleteNotesButton();
});

Then("user should be able to see the deleted message", async function () {
  const resumePage = new ResumePage(this.page!);
  await resumePage.verifyDeletedNoteSection();
});

When("user clicks on manage notes button", async function () {
  const resumePage = new ResumePage(this.page!);
  await resumePage.clickEditNotesButton();
});

When("user enters {string} in the notes field", async function (notes: string) {
  const resumePage = new ResumePage(this.page!);
  await resumePage.enterNotes(notes);
}); 

Then("user should be able to see the added note in the notes section", async function () {
  const resumePage = new ResumePage(this.page!);
  await resumePage.verifyAddedNoteSection();
});

Given("user edits the manage notes", async function () {
  const resumePage = new ResumePage(this.page!);
  await resumePage.clickEditNotesButton();
});

Then("user updates {string} in the notes field", async function (uNotes: string) {
  const resumePage = new ResumePage(this.page!);
  await resumePage.enterUpdatedNotes(uNotes);
});

When("user clicks the {string} button", async function (email: string) {
  const resumePage = new ResumePage(this.page!);
  await resumePage.clickEmail(email);
});

Then("user should be able to view the candidate details", async function () {
  const resumePage = new ResumePage(this.page!);
  await resumePage.verifyCandidateDetails();
});

When("user clicks on {string} button", async function (button: string) {
  const resumePage = new ResumePage(this.page!);
  await resumePage.clickTooltipButton(button);
});

When("user able to see the update candidate information form", async function () {
  const resumePage = new ResumePage(this.page!);
  await resumePage.verifyUpdateCandidateForm();
});

When("user enters the {string} in the candidate name field", async function (uName: string) {
  const resumePage = new ResumePage(this.page!);
  await resumePage.enterUpdatedCandidateName(uName);
});

Then("user clicks on the {string} button", async function (button1: string) {
  const resumePage = new ResumePage(this.page!);
  await resumePage.clickUpdateButton(button1);
});

When("user click on View Resume button", async function () {
  const resumePage = new ResumePage(this.page!);
  await resumePage.clickViewResumeButton();
});

Then("user should be able to see the resume file", async function () {
  const resumePage = new ResumePage(this.page!);
  await resumePage.verifyResumeFile();
});

Then("user should see the success message {string}", async function (message: string) {
  const resumePage = new ResumePage(this.page!);
  await resumePage.verifySuccessMessage(message);
});

When("user should be able to see {string} section", async function (section: string) {
  const resumePage = new ResumePage(this.page!);
  await resumePage.verifySections(section);
});

Then("user should be able to see summary details", async function () {
  const resumePage = new ResumePage(this.page!);
  await resumePage.verifyResumeSummaryDetails();
});

Then("user should be able to see gaps or concerns details", async function () {
  const resumePage = new ResumePage(this.page!);
  await resumePage.verifyConcernsDetails();
});

When("user should be able to see the {string}",async function(skills: string){
  const resumePage = new ResumePage(this.page!);
  await resumePage.verifySkills(skills);
})

// When("user clicks on chevron arrow", async function(){
//   const resumePage = new ResumePage(this.page!);
//   await resumePage.clickChevronArrow();
// });

When("user enters question {string} in the question field", async function (question: string) {
  const resumePage = new ResumePage(this.page!);
  await resumePage.enterQuestion(question);
})

Then("added question should be removed from the list", async function () {
  const resumePage = new ResumePage(this.page!);
  await resumePage.verifyRemovedQuestion();
});
