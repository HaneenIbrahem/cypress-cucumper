Feature: Candidate Interview Result Verification

  Background:
    Given Admin navigate to orangeHRM website and login
    And create employee with login details
    And create new job title
    And create new job vacancy
    And create new candidate
    And shortlist the candidate
    And schedule an interview for the candidate

  Scenario: Pass Interview
    When change the candidate status to Interview Passed
    Then check candidate status "Passed"

  Scenario: Fail Interview
    When change the candidate status to Interview Failed
    Then check candidate status "Failed"

    Scenario: Hired
        When Change the candidate status to Hired
        Then check candidate status "Hired"
