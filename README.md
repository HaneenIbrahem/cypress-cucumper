# 🤖 Automation-E2E-Final-Task-Phase3/ Cucumper

## Test case 1: Candidate Interview Result Verification (Pass/Fail) 🎤

**PreRequisites:**

Create the test needs (Employee/Job Title/Vacancy).
Prepare the candidate needs until it has “Interview Scheduled” status.

**Steps:**

1. Log in as an Admin.
2. Access the candidate form.
3. Change the candidate status to "Interview Passed".
4. Change the candidate status to "Interview Failed".

**Expected**

The Admin should successfully transition the candidate's status to both "Interview Passed" and "Interview Failed".
Emphasize the modification of status only. Highlight the available button options for each status. No further action required on the respective status pages.

________________________________________________________________________

## Test case 2: Verify that the user can upload a txt file for Application Initiated and Hired statuses 📤📄

**PreRequisites:**

Create the test needs (Employee/Job Title/Vacancy).
Prepare the candidate needs until it has “Interview Scheduled” status.

**Steps:**

1. Log in as an Admin.
2. Access the candidate form.
3. Enable Edit candidate switch.
4. Upload a txt file to the Resume section.
5. Save the form. Download the uploaded file and verify its content matches the uploaded data.

**Expected**

The uploaded file should contain the same data as was uploaded.
This process should be tested for Application Initiated and Hired statuses only.
