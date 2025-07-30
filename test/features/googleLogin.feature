Feature: Google Login and Save Auth State

  Scenario: Manually login with Google and save auth state
    Given user is authenticated using stored cookies
    Then user should see the dashboard page 