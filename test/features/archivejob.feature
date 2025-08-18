Feature: Archive a job
  As a user
  I want to archive a job
  So that it is no longer active in the dashboard

  Background:
    Given user is authenticated using stored cookies

  Scenario: Archiving a job
    When I click the three dots button
    And I click the Archive Job button
    And I click the Yes button
