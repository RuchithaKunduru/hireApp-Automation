Feature: Dashboard ATM ownership transfer
  As a user
  I want to transfer ownership of an ATM
  So that I can reassign ownership to another user

  Background:
    Given user is authenticated using Google cookies

  Scenario: Transferring ATM ownership
    When I click the owner access plus button
    And I click on the editor access button
    And I click on the transfer ownership button
    And I click the yes button
    And I click the Done button
