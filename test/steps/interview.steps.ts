import { Given, When, Then } from "@cucumber/cucumber";
import { Page, BrowserContext } from "playwright";
import { InterviewPage } from "../pages/interviewPage";

let page: Page;
let context: BrowserContext;
let interviewPage: InterviewPage;

Given("user should be able to see {string}",async function(interview: string){
    const createNewJobPage = new InterviewPage(this.page!);
    await createNewJobPage.verifyInterview(interview);
});

When("user should see the Knowledge Details in L2 interview", async function(){
    const createNewJobPage = new InterviewPage(this.page!);
    await createNewJobPage.verifyL2Details();
});

When("user should see the Knowledge Details in L1 interview", async function(){
    const createNewJobPage = new InterviewPage(this.page!);
    await createNewJobPage.verifyL1Details();
});

When("user clicks on the copy link button", async function(){
    const createNewJobPage = new InterviewPage(this.page!);
    await createNewJobPage.clickCopyLinkButton();
});

Then("user should be able to see link copied toast message", async function(){
    const createNewJobPage = new InterviewPage(this.page!);
    await createNewJobPage.copyLinkMessage();
});

When("user selects a date to schedule an interview", async function() {
    const createNewJobPage = new InterviewPage(this.page!);
    await createNewJobPage.selectDate();
});

When("user selects the start time to schedule an interview", async function(){
    const createNewJobPage = new InterviewPage(this.page!);
    await createNewJobPage.selectStartTime();
});

When("user clicks on {string} toggle button", async function(time:string){
    const createNewJobPage = new InterviewPage(this.page!);
    await createNewJobPage.clickTimeButton(time);
});

When("user selects the end time to schedule an interview", async function(){
    const createNewJobPage = new InterviewPage(this.page!);
    await createNewJobPage.selectEndTime();
});

When("user enters meeting subject {string}",async function(subject:string){
    const createNewJobPage = new InterviewPage(this.page!);
    await createNewJobPage.enterMeetingSubject(subject);
});

When("user enters {string} as interviewer name",async function(iName:string){
    const createNewJobPage = new InterviewPage(this.page!);
    await createNewJobPage.enterInterviewer(iName);
});

Given("user clicks on Notification section",async function(){
    const createNewJobPage = new InterviewPage(this.page!);
    await createNewJobPage.clickNotification();
});

Then("user should be able to see noticiations header",async function(){
    const createNewJobPage = new InterviewPage(this.page!);
    await createNewJobPage.verifyNotification();
});

Then("user clicks on close button", async function(){
    const createNewJobPage = new InterviewPage(this.page!);
    await createNewJobPage.clickCloseButton();
});

When("user clicks on the confirmation popup of {string} button", async function(del:string) {
    const createNewJobPage = new InterviewPage(this.page!);
    await createNewJobPage.clickDeleteConfirmationPopup(del);
});

Then("user successfully deletes the scheduled interview", async function() {
    const createNewJobPage = new InterviewPage(this.page!);
    await createNewJobPage.verifyDeleteInterview();
});