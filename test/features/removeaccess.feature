Feature: Dashboard ATM access removal
  As a user
  I want to remove access from an ATM
  So that I can ensure the user no longer has access

  Background:
    Given user is authenticated using stored cookies

  Scenario: Removing ATM access
    When I click on the plus button
    And I click the Viewer button
    And I click the Remove Access button
    And I click the Done button

