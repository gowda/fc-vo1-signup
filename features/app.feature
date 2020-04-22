Feature: fc-vo1-signup

  Scenario Outline: Page should have signup form
    Given I navigate to the url "http://localhost:3000"
    Then I should see the field "Full name"
    And I should see the field "Email"
    And I should see the field "Phone number"
    And I should see the field "What is your monthly income?"
    And I should see a radio button with "<salaryGroupLabel>"

    Examples:
    | salaryGroupLabel |
    |        0 - 1.000 |
    |    1.000 - 2.000 |
    |    2.000 - 3.000 |
    |    3.000 - 4.000 |
    |  More than 4.000 |
