Feature: Job category filter

Background:
    Given user is authenticated using stored cookies

  Scenario: Filter jobs by AI Engineering , verify rolesnames and rest of the filter functionality
    When I click on the job category dropdown
    And I select AI Engineering from the dropdown
    Then I should see job role "Generative AI Intern 2"
    And I should see job role "Generative AI Intern"
    And I should see job role "AI Associate"
    #reset the filter
    When I click on the reset button
    Then the job category should be reset to All
