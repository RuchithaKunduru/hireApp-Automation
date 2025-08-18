import { Given, When, Then } from "@cucumber/cucumber";
import { Page, BrowserContext } from "playwright";
import { CreateNewJobPage } from "../pages/createNewJobPage";

let createNewJobPage: CreateNewJobPage;
let page: Page;
let context: BrowserContext;

When("user clicks on Create New Job button", async function () {
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.createNewJobButtonClick();
});

Then("user should be redirected to the Create Job page", async function () {
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.verifyRedirectedCreateJob();
});

Given("user fills all basic job details", async function () {
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.basicJobDetails();
});

When("user fills business value details", async function () {
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.businessValueDetails();
});

Then("basic job details should be saved successfully", async function () {
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.verifyBasicDetailsSaved();
});

Given("user enters foundational skills", async function () {
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.enterFoundationSkills();
});

Given("user enters behavioural skills", async function () {
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.enterBehaviouralSkills();
});

Given("user enters Advances skills", async function () {
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.enterAdvanceSkills();
});

Then("all the skills should be saved successfully", async function () {
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.verifyAllSkills();
});

Given("user fills in discovery session details", async function () {
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.fillDiscoverySession();
});

When("user select tone as {string}", async function (tone: string) {
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.selectTone(tone);
});

Then("discovery session should be saved successfully", async function () {
  await this.page.waitForTimeout(3000);
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.verifyDiscoverySession();
});

Given("user should see {string} section", async function (jdSection: string) {
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.verifyJDSection(jdSection);
});

Given("user clicks on the button {string}", async function (aSkill: string) {
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.clickButton(aSkill);
});

Then("user enters skills or requirement details", async function () {
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.enterRequirements();
});

When("users enters {string}", async function (placeholder: string) {
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.enterReason(placeholder);
});

When("user selects significance score {string} from the drop down", async function(score:string){
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.clickScore(score);
});

Then("user able to see the technical competence", async function(){
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.verifyTechnicalCompetence();
});

Given("user clicks button {string}",async function(div: string){
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.clickDivButton(div);
});

When("user waits for {string} seconds",async function(wait:string){
  const createNewJobPage = new CreateNewJobPage(this.page!);
  await createNewJobPage.waitTime(wait);
});