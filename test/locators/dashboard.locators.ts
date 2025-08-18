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



}