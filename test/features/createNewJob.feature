Feature: HireApp - Job Creation Flow End-to-End

  Background:
    Given user is authenticated using stored cookies

  Scenario: Navigating to Create Job page from Dashboard
    When user clicks on Create New Job button
    Then user should be redirected to the Create Job page

    # User Validates Basic Job Details Section
    Given user fills all basic job details
    And user fills business value details
    When user clicks on the " Save & Next " button
    Then basic job details should be saved successfully

    # User Validates Skills Section
    Given user enters foundational skills
    And user enters behavioural skills
    And user enters Advances skills
    When user clicks on the " Save & Next " button
    Then all the skills should be saved successfully

    # User Validates Discovery Session Section
    Given user fills in discovery session details
    And user clicks on the " Enhance with AI " button
    And user should be able to see the "Set tone of AI enhancement"
    And user select tone as "Professional"
    And user clicks on the "Enhance" button
    When user clicks on the " Save & Next " button
    Then discovery session should be saved successfully

    # User Validates Job Description Section
    Given user should see "Role Description" section
    And user should see "Key Responsibilities" section
    And user should see "Top Non-Negotiable Skills" section
    And user should see "Negotiable Skills" section
    Then user clicks on the " Create ICP " button

    # User Validates Ideal candidate Profile
    Given user should see " Ideal Profile Traits " section

    # User Validates ATM Curated Section
    And user should be able to see " ATM Curated " section
    # skill-1
    And user clicks on the button "Add Skill"
    And user enters skills or requirement details
    And users enters "Explain why this matters"
    And user selects significance score "6" from the drop down
    And user clicks on the button "Add"
    And user clicks on the button "Enhance with AI"
    # User Validates AI Enhanced Section
    Then user able to see the technical competence
    And user clicks on the button "Download"

    # User Validates Approval Section
    And user clicks on the button "Request for Approval"
    And user should be able to see the "Request for approval"
    And user clicks on the " Cancel " button
    # send request
    And user clicks on the button "Request for Approval"
    And user clicks on the button "karthik.bolla@techolution.com"
    Then user clicks on the " Send Request " button
    

