import { Given, When, Then } from "@cucumber/cucumber";
import { Page, BrowserContext } from "playwright";
import { ProfilePage } from "../pages/profilePage";

let page: Page;
let context: BrowserContext;
let profilePage: ProfilePage;

Given("user clicks on the profile button", async function(){
    const profilePage = new ProfilePage(this.page!);
    await profilePage.clickProfileButton();
});

When("user should be able to see the title {string}",async function(profileName:string){
    const profilePage = new ProfilePage(this.page!);
    await profilePage.verifyProfileName(profileName);
});

