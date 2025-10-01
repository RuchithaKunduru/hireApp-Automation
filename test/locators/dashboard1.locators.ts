export const dashbaordLocators = {
//adding an Atm 
plusbutton:'//span[@ptooltip="Add or edit assigned ATMs"][1]',
selectAtm:"//span[@class='p-dropdown-label p-inputtext p-placeholder ng-star-inserted']",
searchbar:'.p-dropdown-filter.p-inputtext.p-component',
selectAtmname:"(//div[@class='flex align-items-center gap-2 atm-option-item ng-star-inserted'])[1]",
atmEmail:"//span[@class='atm-option-email']",
Donebutton:"//button[normalize-space()='Done']",

//remove access from ATM
selectplusbutton:"(//span[@ptooltip='Add or edit assigned ATMs'][normalize-space()='+2'])[1]",
selectingtheATM:"(//button[@class='access-btn'][normalize-space()='Editor'])[3]",
viewerbutton:"//button[normalize-space()='Viewer']",
Removeaccessbutton: '.access-menu-btn.remove',
//changing ownership 
owneraccessplusbutton: "(//span[@ptooltip='Add or edit assigned ATMs'][normalize-space()='+'])[2]",
editoraccessbutton: "//button[normalize-space()='Editor']",
transforownwershipbutton: "//button[normalize-space()='Transfer Ownership']",
yesbutton:"//button[normalize-space()='Yes']",

//copying the JD and Videoresume link 
copybutton:"(//button[@class='card-menu-btn ng-star-inserted'])[1]",
copyjdlink:"//button[normalize-space()='Copy JD Link']",
copyvideoresumelink:"//button[normalize-space()='Copy Video Resume Link']",

//archiving the job 
threeDotsButton: "(//button[@class='card-menu-btn ng-star-inserted'])[3]",
archiveButton: "//button[normalize-space()='Archive Job']",

// view deatils 
viewdeatils :"(//button[contains(text(),'View Details')])[1]",
editbasicdeatils :"(//button[contains(text(),'Edit')])[1]",

//video resume and resume locators 
videoresumebutton: "//app-job-card[1]//div[1]//div[1]//div[1]//a[1]",
backbutton :"//div[@class='back-btn']",
resumebutton :"//app-job-card[1]//div[1]//div[1]//div[1]//a[2]//*[name()='svg']",

//Filter locators
jobCategoryDropdown:"//span[@id='pr_id_1_label']",
aiEngineeringOption:"//li[@aria-label='AI Engineering']",
appliedJobCategory: "//span[normalize-space()='AI Engineering']",
allJobRoleNames: "//div/h2[@class='job-role-name']",
jobRoleName: (roleName: string) => `//h2[@class='job-role-name' and normalize-space(text())='${roleName}']`,
resetButton:"//button[normalize-space()='Reset']",

// search functionality
SearchBar:"//input[@placeholder='Search']",
}


