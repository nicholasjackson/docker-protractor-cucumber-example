Feature: Login
  In order to order an item
  A visitor
  Should log into the website

  @login
  Scenario:
    Given I am on the home page
    And I take a screenshot "./screenshots/homepage.png"
    Then I should see a link "Sign in"
    And I click link "Sign in"
    And I take a screenshot "./screenshots/sign_in.png"
    Then I should see "Sign in"
    When I sign in
    And I take a screenshot "./screenshots/signed_in.png"
    Then I should see "Welcome to your M&S account"
