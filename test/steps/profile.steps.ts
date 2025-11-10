
Then("user go back to previous section", async function(){
    const profilePage = new ProfilePage(this.page!);
    await profilePage.clickGoBack();
});

When("user clicks on the 3 dot button for {string} Job card", async function(dot: string){
    const profilePage = new ProfilePage(this.page!);
    await profilePage.click3DotButton(dot);
});

When("user able to see {string} section", async function(settings:string){
    const profilePage = new ProfilePage(this.page!);
    await profilePage.verifySettings(settings);
});

When("user clicks on edit button for title {string}", async function(title:string){
    const profilePage = new ProfilePage(this.page!);
    await profilePage.clickEditButton(title);
});

When("user enters question {string}", async function(question:string){
    const profilePage = new ProfilePage(this.page!);
    await profilePage.enterQuestion(question);
});

When("user enters title as {string}", async function(title:string){
    const profilePage = new ProfilePage(this.page!);
    await profilePage.enterTitle(title);
});

When("user enters description as {string}", async function(description:string){
    const profilePage = new ProfilePage(this.page!);
    await profilePage.enterDescription(description);
});

When("user enters when to apply as {string}", async function(toApply:string){
    const profilePage = new ProfilePage(this.page!);
    await profilePage.enterWhenToApply(toApply);
});

When("user enters when not to apply as {string}", async function(NotToApply: string){
    const profilePage = new ProfilePage(this.page!);
    await profilePage.enterWhenNotToApply(NotToApply);
});

When("user clicks priority as {string}", async function(priority: string){
    const profilePage = new ProfilePage(this.page!);
    await profilePage.clickPriority(priority);
});

When("user clicks scope as current role", async function(){
    const profilePage = new ProfilePage(this.page!);
    await profilePage.clickScope();
});

Then("user clicks on the Add button", async function(){
    const profilePage = new ProfilePage(this.page!);
    await profilePage.clickAddButton();
});
