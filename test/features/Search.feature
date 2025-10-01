

Feature: Search job roles and verify results

Background:
  Given user is authenticated using stored cookies

Scenario: Search job roles by keyword
  When I search for job role "AI"
  Then I should see the following job roles after search:
    | Generative AI Intern 2 |
    | Generative AI Intern   |
    | AI Associate           |
