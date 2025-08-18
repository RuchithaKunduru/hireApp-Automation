export const newJobLocators = {
  // Dashboard: {
  createNewJobButton: '(//button[text()=" Create New Job "])[3]',
  redirectedCreateJob: ".create-job-header-con",

  // Basic Details: {
  hiringRole: "#roleName",
  practiceAreaDropDownButton: '//span[text()="Practice Area *"]',
  practiceAreaDropDownOption: '//span[text()="Quality Assurance"]',
  expertise: '//span[text()="Associate"]',
  location: '//span[text()="Hyderabad, India"]',
  employmentType: '//span[text()="Full Time"]',
  projectName: "#projectName",
  clientName: "#clientName",
  noOfRequirements: "#requirement",
  basicDetailsSavedMessage: "Basic Details Saved Successfully",

  // Skills:
  foundationalSkillsInput: "#mat-input-0",
  behaviouralSkillsInput: '//h1[text()=" 2. Behavioural Skills"]',
  advanceSkillsInput: "#mat-input-2",
  skillsSavedMessage: "Skills Saved Successfully",

  // Discovery Session
  discoverySessionInput: "#discovery",
  selectTone: (tone: string) => `//span[text()="${tone}"]`,
  discoverySessionMessage: "Discovery Session Saved Successfully",

  // Job Description
  jobDescription: (jdSection: string) => `//h3[text()="${jdSection}"]`,
  clickButton: (aSkill:string) => `//span[text()="${aSkill}"]`,

  // Ideal Profile Traits
  requirements: '//input[@placeholder="Enter skill or requirement"]',
  enterReason: (placeholder:string) => `//textarea[@placeholder="${placeholder}"]`,
  scoreBox: '//div[@class="p-dropdown p-component"]',
  selectScore:(score:string)=>  `//span[text()="${score}"]`,
  technicalCompetence:'//td[text()=" Technical Competence "]',
  divButton: (div:string) => `//div[text()="${div}"]`

  
};
