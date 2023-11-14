Feature: Verify that the user can upload a txt file for Application Initiated and Hired statuses.

  Background:
    Given I navigate to orangeHRM website
    And login to the website
    And create employee with login details
    And create new job title
    And create new job vacancy
    And create new candidate

    Scenario: upload a txt file for Application Initiated and download it
        When upload file and download it
        Then delete employee + job title + vacancy

    Scenario: upload a txt file for Hired and download it
        When shortlist the candidate
        And schedule an interview for the candidate
        And change the candidate status to Interview Passed
        And Change the candidate status to Hired
        And upload file and download it
        Then delete employee + job title + vacancy