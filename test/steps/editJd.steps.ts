import { When, Then, Before } from '@cucumber/cucumber';
import { EditJdPage } from '../pages/editjdPage';
import { Page, BrowserContext } from "playwright";
import { expect } from '@playwright/test';

let editJdPage: EditJdPage;
let page: Page;
let context: BrowserContext;

Before(async function () {
  // Initialize once per scenario
  editJdPage = new EditJdPage(this.page);
});

When('i click on viewdeatilsbutton', async function() {
  await editJdPage.clickViewDetails();
});

When('i click on editbasicdeatilsbutton', async function() {
  await editJdPage.clickEditBasicDetails();
});

When('i select expertise as mid level', async function() {
  await editJdPage.selectExpertiseMidLevel();
});

When('i select location as Hyderabad', async function() {
  await editJdPage.selectLocation();
});

Then('i save the changes', async function() {
  await editJdPage.saveChanges();
});

Then('i confirm the save changes', async function() {
  await editJdPage.confirmSaveChanges();
});

Then('the expertise should be updated to Mid-Level', async function () {
  const expertise = await editJdPage.getExpertiseValue();
  expect(expertise).toContain('Mid-Level');
});

Then('the location should be updated to Hyderabad', async function () {
  const location = await editJdPage.getLocationValue();
  expect(location).toContain('Hyderabad');
});

Then('i click on regenerate button', async function() {
  await editJdPage.clickRegenerateButton();
});

Then('i click on yes button', async function() {
  await editJdPage.clickYesButton();
});
