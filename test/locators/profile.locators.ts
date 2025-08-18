export const profileLocators = {

  // Profile Section
  profileButton: '//div[contains(@class,"sidebar-profile-con ng-star-inserted")]',
  pName: (profileName:string) => `//span[text()="${profileName}"]`,
  dotButton: (dot: string)=> `//div[contains(., "${dot}") and contains(@class, "job-card")]//button[contains(@class, "card-menu-btn")][2]`,
  settingsPage: (settings: string) => `//p[text()="${settings}"]`,
  editButton: (title:string) => `//span[normalize-space(text())="${title}"]/following-sibling::div[contains(@class, "dropdown-item-icon")]`,
  questionType: '#prompt',
  flagTitle: '#redFlagName',
  flagDescription: '#description',
  flagToApply: '#whenToApply',
  flagNotToApply: '#whenNotToApply',
  priorityButton: '#low',
  scopeButton: '#currentRole',
  addButton: '(//button[text()=" Add "])[2]'
} 