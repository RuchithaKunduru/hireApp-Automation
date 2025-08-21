import { When, Then } from '@cucumber/cucumber';
import { DashboardPage } from '../pages/dashboardPage';
import dashboardData from '../test-data/dashbaord.json';
import { Page, BrowserContext, } from "playwright";
import { expect } from '@playwright/test';

let dashbaord: DashboardPage;
let page: Page;
let context: BrowserContext;

// Actions
When('I click on the plus button', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.plusbuttonclick();
});

When('I open the select ATM popup', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.openselectatmpopup();
});

When('I search for the ATM with text {string}', async function (searchText: string) {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.searchbarinput(searchText);
});

When('I select the ATM name', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.selectAtmName();
});

// Validations
Then('I validate the ATM email', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.validateAtmEmail(dashboardData.expectedATMEmail);
});

// Separate Done click
Then('I click the Done button', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.clickDoneButton();
});

// remove access from ATM
When('I select the ATM for access removal', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.selectingtheATM();
});
When('I click the Viewer button', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.clickViewerButton();
});

When('I click the Remove Access button', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.clickRemoveAccessButton();
});

// Changing ownership
When('I click the owner access plus button', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.owneraccessplusbutton();
});

When('I click the Editor access button', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.editoraccessbutton();
});

When('I click the Transfer Ownership button', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.transforownwershipbutton();
});
When('I click the Yes button', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.yesbutton();
});

// Copying the JD and Video resume link
When('I click the Copy button', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.copybutton();
});

When('I copy the JD link', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.copyjdlink();
});

When('I copy the Video Resume link', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.copyvideoresumelink();
}); 
// Archiving the job
When('I click the three dots button', async function () { 
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.threeDotsButton();
});     
When('I click the Archive Job button', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.archiveButton();
});
// redirection of video resume and resume
When('i click on the videoresume button', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.clickVideoResumeButton();
});
Then('the url should contain {string} for videoresume', async function(expected: string) {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.verifyUrlContains(expected);
});
When('i click on the back button', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.clickBackButton();
});

When('i click on the resume button', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.clickResumeButton();
});

Then('the url should contain {string} for resume', async function(expected: string) {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.verifyUrlContains(expected);
});

// Filter locators
When('I click on the job category dropdown', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.jobCategoryDropdown();
});

When('I select AI Engineering from the dropdown', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.aiEngineering();
});

//  Dynamic locator usage
Then('I should see job role {string}', async function (roleName: string) {
  const dashboardPage = new DashboardPage(this.page);

   //  log all roles currently on the page
  const roles = await dashboardPage.getAllJobRoleNames();
  console.log("Available roles after filter:", roles);

  const jobRoleText = await dashboardPage.getJobRoleByName(roleName);
  console.log(`Job Role found for '${roleName}':`, jobRoleText);
  expect(jobRoleText).toContain(roleName);
});

When('I click on the reset button', async function () {
  const dashboardPage = new DashboardPage(this.page);
  await dashboardPage.resetButton();
});

Then('the job category should be reset to All', async function () {
  
  const dashboardPage = new DashboardPage(this.page);
  const category = await dashboardPage.getSelectedJobCategory();
  expect(category).toContain('All');
});

// Search functionality
When('I search for job role {string}', async function (searchText: string) {
  const dashboardPage = new DashboardPage(this.page);
  const roles = await dashboardPage.searchJobRole(searchText);

  console.log(` Roles returned for search '${searchText}':`, roles);
  this.searchResults = roles; // store results in world for next validation
});

Then('I should see the following job roles after search:', async function (dataTable) {
  const expectedRoles = dataTable.raw().flat(); // expected list from feature file
  const actualRoles = this.searchResults;

  console.log(" Expected roles:", expectedRoles);
  console.log(" Actual roles:", actualRoles);

  for (const role of expectedRoles) {
    expect(actualRoles).toContain(role);
  }
});
