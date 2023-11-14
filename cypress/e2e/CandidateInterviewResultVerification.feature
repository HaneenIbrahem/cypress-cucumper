Feature: Candidate Interview Result Verification

  Background:
    Given I navigate to orangeHRM website
    And login to the website
    And create employee with login details
    And create new job title
    And create new job vacancy
    And create new candidate
    And shortlist the candidate
    And schedule an interview for the candidate

  Scenario: Pass Interview
    When change the candidate status to Interview Passed
    Then delete employee + job title + vacancy "Passed"

  Scenario: Fail Interview
    When change the candidate status to Interview Failed
    Then delete employee + job title + vacancy "Failed"

    Scenario: Hired
        When Change the candidate status to Hired
        Then delete employee + job title + vacancy "Hired"
