Feature: Edit Job Description
 Background:
    Given user is authenticated using stored cookies

    # edit job basic details
  Scenario: Update expertise and location in JD
    When i click on viewdeatilsbutton
    And i click on editbasicdeatilsbutton
    And i select expertise as mid level
    And i select location as Hyderabad
    Then i save the changes
    And i confirm the save changes
    Then the expertise should be updated to Mid-Level
    And the location should be updated to Hyderabad
    Then i click on regenerate button
    Then i click on yes button