Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  to run my E2E tests

  Scenario: Wrapping WebDriver
    Given I go on "index.html"
    Then i take a screenshot "./screenshots/homepage.png"
    Then the title should equal "Welcome to Marks & Spencer"
    And the menu should contain "YOUR ACCOUNT"
