Feature: Interview feature

Scenario: Validate Dropdowns of Interview Level on Resume Page

    Given user is authenticated using stored cookies
    Then user should see the dashboard page 


    # User Validates Job Card Details
    Given user should see the job cards on dashboard page
    When user should see the job card title "SDET-1" 
    When user clicks on "AI Resume Vetting" button for job title "SDET-1"
    Then user should be able to see the Resume page
    When user selects "Interviews" from the resume source dropdown
    When user clicks the "ruchithakumar22@gmail.com" button
    Then user should be able to view the candidate details

    # User Validates Cumulative score copy button
    Given user clicks on the copy link button
    Then user should be able to see link copied toast message

    # User Validates L2 Interview Details
    Given user should be able to see "Interviews" section
    And user should be able to see "L2 Interview"
    And user should see the Knowledge Details in L2 interview
    Then user should be able to see "Moved to L2 Interview"

    # User Validates L1 Interview Details
    Given user should be able to see "L1 Interview"
    And user should see the Knowledge Details in L1 interview
    When user clicks on the "Gap Analysis" button
    Then user should be able to see "Skills" section
    And user should be able to see "Moved to L2 Interview"
    Then user clicks on the "View Summary" button

    # User Validates Schedule Interview Section
    Given user clicks on the "Schedule Interview" button
    And user should be able to see "Schedule Interview"
    And user selects the current date for scheduling an interview
    And user should be able to see the "India Standard Time (UTC+5:30)"
    And user selects the start time to schedule an interview
    And user clicks on "Decrease hour" toggle button
    And user clicks on "Increase hour" toggle button
    And user clicks on "Increase minute" toggle button
    And user clicks on "Decrease minute" toggle button
    And user clicks on the "PM" button
    And user selects the end time to schedule an interview
    And user clicks button "1 hr"
    And user enters meeting subject "Techolution QA - L3 Interview - Nilesh"
    And user clicks button "Enter Name to Add Interviewers"
    And user enters "ruchitha" as interviewer name
    Then user clicks on the "Schedule" button

    # # User Validates Deleting the Scheduled Interview
    # Given user clicks on the "Edit" button
    # When user clicks on the "Delete" button
    # When user clicks on the confirmation popup of "Delete" button 
    # Then user successfully deletes the scheduled interview



    # User Validates Notification Functionality
    Given user clicks on Notification section
    Then user should be able to see noticiations header
    

