import { When, Then } from '@cucumber/cucumber';
import { editjdPage } from '../pages/editjdPage';
import { Page, BrowserContext } from "playwright";
import { expect } from '@playwright/test';

let editjd:editjdPage;
let page: Page;
let context: BrowserContext;

When('i click on viewdeatilsbutton', async function() {
    const editjdpage = new editjdPage(this.page);
    await editjdpage.clickViewDetails();
});

When('i click on editbasicdeatilsbutton', async function() {
    const editjdpage = new editjdPage(this.page);
    await editjdpage.clickEditBasicDetails();
});

When('i select expertise as mid level', async function() {
    const editjdpage = new editjdPage(this.page);
    await editjdpage.selectExpertiseMidLevel();
});

When('i select location as Hyderabad', async function() {
    const editjdpage = new editjdPage(this.page);
    await editjdpage.selectLocation();
});

Then('i save the changes', async function() {
    const editjdpage = new editjdPage(this.page);
    await editjdpage.saveChanges();
});

Then('i confirm the save changes', async function() {
    const editjdpage = new editjdPage(this.page);
    await editjdpage.confirmSaveChanges();
});

Then('the expertise should be updated to Mid-Level', async function () {
    const editjdpage = new editjdPage(this.page);
    const expertise = await editjdpage.getExpertiseValue();
    expect(expertise).toContain('Mid-Level');
});

Then('the location should be updated to Hyderabad', async function () {
    const editjdpage = new editjdPage(this.page);
    const location = await editjdpage.getLocationValue();
    expect(location).toContain('Hyderabad');
});

Then('i click on regenerate button', async function() {
    const editjdpage = new editjdPage(this.page);
    await editjdpage.clickRegenerateButton();
});

Then('i click on yes button', async function() {
    const editjdpage = new editjdPage(this.page);
    await editjdpage.clickYesButton();
});