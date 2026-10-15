Feature: Login to ParaBank

  Scenario: Successful login shows the accounts overview
    Given I am on the ParaBank home page
    When I log in with username "john" and password "demo"
    Then the account table is visible
