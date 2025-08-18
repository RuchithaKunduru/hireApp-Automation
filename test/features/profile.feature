Feature: Profile feature

Scenario: User Validate Profile section on main dashboard

    Given user is authenticated using stored cookies
    Then user should see the dashboard page 

    # User Verifies Team Members Section
    Given user clicks on the profile button
    When user clicks on the " Team Members " button
    Then user should be able to see the title "Kunduru Sai Ruchitha"
    Then user should be able to see the title "ruchitha.sai@techolution.com"
    Then user should be able to see the title "ATM Specialist "

    # Connect Drive
    When user should be able to see "Connect with your Google Drive" section
    Then user go back to previous section

    # User Validates Settings Functionality
    Given user should see the job cards on dashboard page
    When user should see the job card title "SDET-1" 
    And user clicks on the 3 dot button for "SDET-1" Job card
    And user clicks on the " Settings " button
    Then user able to see " Settings - Video Resume " section

    # User Validates Video Resume Questions
    And user clicks on the button "Video Resume Questions"
    And user should be able to see the title " Introduction "
    When user clicks on edit button for title "Introduction"
    And user enters question "Provide a brief overview of your background, qualifications, and experience?"
    And user clicks on the " Update " button

    And user should be able to see the title "Core Skills"
    When user clicks on edit button for title "Core Skills"
    And user enters question "What are your core strengths and how do you apply them at work?"
    And user clicks on the " Update " button

    And user should be able to see the title "Problem Solving"
    When user clicks on edit button for title "Problem Solving"
    And user enters question "Can you describe a problem you solved and how you approached it?"
    And user clicks on the " Update " button

    And user should be able to see the title "Future Vision"
    When user clicks on edit button for title "Future Vision"
    And user enters question "Where do you see your life in 10 years?"
    And user clicks on the " Update " button

    And user should be able to see the title "When Can You Join"
    When user clicks on edit button for title "When Can You Join"
    And user enters question "What is your earliest possible joining date?"
    And user clicks on the " Update " button
    Then user clicks on the button "Video Resume Questions"


    Given user clicks on the button "Red Flags"
    And user should be able to see the "Notice Period"
    And user should be able to see the "Negative Remarks"

    # User Add New Red Flags
    When user clicks on the " + Add New " button
    Then user should be able to see the "Add Red Flags"
    And user clicks on the " + Add Custom Flag " button 
    And user enters title as "Greetings"
    And user enters description as "Hey Hi Hello"
    And user enters when to apply as "When someone greets as Hello"
    And user enters when not to apply as "When someone greets as Namaste"
    And user clicks priority as "low"
    And user clicks scope as current role
    Then user clicks on the " Add " button




