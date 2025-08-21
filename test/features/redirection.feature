Feature: Dashboard redirection
  As a user
  I want to validate the redirection of Video Resume and Resume buttons
  So that I can ensure correct navigation happens
  Background:
        Given user is authenticated using stored cookies
  Scenario: Verify redirection of Video Resume and Resume buttons
    When i click on the videoresume button
    Then the url should contain "makeOrBreak" for videoresume
    When i click on the back button
    When i click on the resume button
    Then the url should contain "resume" for resume