export const interviewLocators = {
  // Interview Section
  verifyInterview: (interview:string) => `//p[text()="${interview}"]`,
  l2Interview: '(//h1[text()="Knowledge Details"])[1]',
  l1Interview: '(//h1[text()="Knowledge Details"])[2]',
  copyLinkButton:'//button[@class="cursor-pointer"]',
  copyLinkMsg:'//div[text()="Link copied to clipboard!"]',
  // dateSchedule: '//div[@class="custom-datepicker-wrapper"]',
  selectDate: '//input[@placeholder="Select Interview date"]',
  dateCell: (day: number) => `//div[contains(@class,"react-datepicker__day") and not(contains(@class,"outside-month")) and text()="${day}"]`,
  startTimeSchedule: '(//div[@class="w-full max-w-md relative"])[1]',
  timeButton:(time: string) =>`//button[@aria-label="${time}"]`,
  endTimeSchedule: '(//div[@class="w-full max-w-md relative"])[2]',
  meetingSubject: '//input[@class="custom-inputText"]',
  interviewerName: '(//input[contains(@id, "react-select") and @type="text"])[2]',
  deleteConfirmationPopup: '(//button[text()="Delete"])[2]',
  deleteInterview: '(//button[text()="Schedule Interview"])',

  // Notification
  notificationButton:'//a[text()="Notifications"]',
  notification: '//div[contains(text()," Notifications")]',
  closeButton: '//i[contains(@class,"close-enhance-btn")]'
}