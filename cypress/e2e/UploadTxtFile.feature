Feature: Verify that the user can upload a txt file for Application Initiated and Hired statuses.

  Background:
    Given Admin navigate to orangeHRM website and login
    And create employee with login details
    And create new job title
    And create new job vacancy
    And create new candidate

    Scenario: upload a txt file for Application Initiated and download it
        When upload file and download it
        Then check file content

    Scenario: upload a txt file for Hired and download it
        When shortlist the candidate "Shortlisted"
        And schedule an interview for the candidate "Interview Scheduled"
        And change the candidate status to Interview Passed "Passed"
        And Change the candidate status to Hired "Hired"
        And upload file and download it
        Then check file content