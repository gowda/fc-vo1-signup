Feature: fc-vo1-signup

  Scenario: First page should have full name form
    Given I navigate to the url "http://localhost:3000"
    Then I should see the field "Full name"

  Scenario: Clicking next on full name form shows email form
    Given I navigate to the url "http://localhost:3000"
    And I click on "Next"
    Then I should see the field "Email"

  Scenario: Clicking next on email form shows phone number form
    Given I navigate to the url "http://localhost:3000"
    And I click on "Next"
    And I click on "Next"
    Then I should see the field "Phone number"

  Scenario Outline: Clicking next on phone number form shows salary form
    Given I navigate to the url "http://localhost:3000"
    And I click on "Next"
    And I click on "Next"
    And I click on "Next"
    Then I should see the field "What is your monthly income?"
    And I should see a radio button with "<salaryGroupLabel>"

    Examples:
    | salaryGroupLabel |
    |        0 - 1.000 |
    |    1.000 - 2.000 |
    |    2.000 - 3.000 |
    |    3.000 - 4.000 |
    |  More than 4.000 |

  Scenario: Clicking next on salary form shows summary page
    Given I navigate to the url "http://localhost:3000"
    And I click on "Next"
    And I click on "Next"
    And I click on "Next"
    And I click on "Next"
    Then I should see the text "We are done here"
