Feature: Resume feature

Scenario: Validate Dropdowns of Interview Level on Resume Page

    Given user is authenticated using stored cookies
    Then user should see the dashboard page 
    
    # User Validates Job Card Details
    Given user should see the job cards on dashboard page
    When user should see the job card title "SDET-1" 
    When user clicks on "AI Resume Vetting" button for job title "SDET-1"
    Then user should be able to see the Resume page
    When user selects "AI Resume Vetting" from the resume source dropdown
    And user selects "All" from the status dropdown
    And user selects "Latest" from the sort dropdown
    Then user able to see all the resumes in the table

    # Validate Manage Notes Functionality
    When user clicks on "Manage Notes" button
    And user click on "Add Notes" button of the notes
    Then user should be able to add Notes
    And user enters notes "This is related to QA" in the notes field
    And user click on "Save" button of the notes
    Then user should be able to see the added note in the notes section
    Given user edits the manage notes
    And user updates "This is related to QA Automation" in the notes field
    And user click on "Save" button of the notes
    Then user should be able to see the updated message
    Given user deletes the manage notes
    Then user should be able to see the deleted message

    # validate update, edit candidate details functionality
    When user clicks the " ruchithakumar22@gmail.com " button
    Then user should be able to view the candidate details
    When user clicks on "Edit" button
    And user able to see the update candidate information form
    And user enters the "Kunduru Ruchitha" in the candidate name field
    And user clicks on the " Update " button
    Then user should see the success message "Candidate details updated successfully"

    # Validate View Resume Functionality
    When user click on View Resume button
    Then user should be able to see the resume file

    # Validate Resume Overview Section
    Given user clicks on the " Overview " button
    Then user should be able to see "summary" section
    And user should be able to see summary details
    # And user can give feedback on the summary
    And user should be able to see "Key Strengths" section
    And user should be able to see "Gaps or Concerns" section
    Then user should be able to see gaps or concerns details

    # Validate ICP Skill Matrix Section
    When user clicks on the " ICP Skill Matrix " button
    Then user should be able to see "ICP Skill Matrix" section
    When user should be able to see the "Technical Skills"

    # Validate Follow Up Questions Section
    When user clicks on the " Follow Up Questions " button
    Then user should be able to see "Follow Up Questions" section

    # Validate add and delete follow-up questions
    When user clicks on the " Add Follow-up " button
    And user enters question "What is mean by cypress?" in the question field
    And user clicks on the " Save " button
    Then user should be able to see "User Added Questions" section
    When user clicks on "Delete" button
    Then added question should be removed from the list

