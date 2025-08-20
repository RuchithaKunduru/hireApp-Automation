import { When, Then } from '@cucumber/cucumber';
import { DashboardPage } from '../pages/dashboardPage';
import dashboardData from '../test-data/dashbaord.json';
import { Page, BrowserContext } from "playwright";

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