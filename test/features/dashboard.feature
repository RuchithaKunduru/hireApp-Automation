Feature: Dashboard ATM selection and email validation
  As a user
  I want to select an ATM and validate its contact email
  So that I can ensure the correct ATM details are displayed before confirming
  Background:
    Given user is authenticated using stored cookies

  Scenario: addding an Atm and validating email
    When I click on the plus button
    And I open the select ATM popup
    And I search for the ATM with text "Ruchitha"
    And I select the ATM name
    Then I validate the ATM email
    And I click the Done button
