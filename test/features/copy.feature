Feature: Copy JD and Video Resume links
  As a user
  I want to copy the JD and Video Resume links
  So that I can share them with others

  Background:
    Given user is authenticated using stored cookies

  Scenario: Copying JD and Video Resume links
    When I click the Copy button
    And I copy the JD link
    And I click the Copy button 
    And I copy the Video Resume link
