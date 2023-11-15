import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import addJobTitle from "../../support/helpers/jobTitleHelper";
import addNewVacancy from "../../support/helpers/vacancyHelper";
import addNewCandidate from "../../support/helpers/candidateHelper";
import CandidatePage from "../../support/page-objects/candidatesPage";

import { padTo2Digits } from "../../support/helpers/format";
// const date = (new Date());
const today = new Date();  
const nextWeek = new Date(today);
nextWeek.setDate(today.getDate() + 7);

const dayNextWeek = [
    nextWeek.getFullYear(),
    padTo2Digits(nextWeek.getMonth() + 1),
    padTo2Digits(nextWeek.getDate()),
].join('-');

const candidatePageObject: CandidatePage = new CandidatePage()
let jobTitleId: number
let jobTitle: string
let employeeId: number
let empNumber: number
let empName: string
let vacancyId: number
let vacancyName: string
let candidateId: number
let filePath: string = 'cypress/fixtures/file.txt'
let downladFilePath: string = 'cypress/downloads/file.txt'

Given("I navigate to orangeHRM website", () => {
    cy.visit("/web/index.php/auth/login");
});

Given("login to the website", () => {
    cy.login('Admin', 'admin123')
});

Given("create employee with login details", () => {
    cy.fixture('employee').as('eData')
    cy.get('@eData').then((dataEmp: any) => {
        cy.addNewEmployee(dataEmp.addEmployee.firstName, dataEmp.addEmployee.middleName, dataEmp.addEmployee.lastName, dataEmp.addEmployee.empPicture, dataEmp.addEmployee.employeeId).then((response) => {
            empNumber = response.body.data.empNumber
            employeeId = response.body.data.employeeId
            empName = response.body.data.firstName + response.body.data.middleName + response.body.data.lastName
        }).then(() => {
            cy.addNewUser(dataEmp.addUser.username, dataEmp.addUser.password, dataEmp.addUser.status, dataEmp.addUser.userRoleId, empNumber)
        })
    })
});

Given("create new job title", () => {
    addJobTitle.addNewJobTitleViaAPI().then(jobTitleInfo => {
        jobTitleId = jobTitleInfo.id;
        jobTitle = jobTitleInfo.title;
    });
});

Given("create new job vacancy", () => {
    addNewVacancy.addNewVacancyViaAPI(jobTitleId, empNumber).then(vacancyInfo => {
        vacancyId = vacancyInfo.vacancyId
        vacancyName = vacancyInfo.vacancyName
    })
});

Given("create new candidate", () => {
    addNewCandidate.addNewCandidateViaAPI(vacancyId).then(candidateInfo => {
        candidateId = candidateInfo.candidateId
    })
});

When("upload file and download it", () => {
    candidatePageObject.findVacancy(vacancyName)
    candidatePageObject.uploadFile(filePath)
    candidatePageObject.downladFile()
    candidatePageObject.verifyFileContent(downladFilePath)
})

When("shortlist the candidate", () => {
    candidatePageObject.findVacancy(vacancyName)
    candidatePageObject.shortList()
    candidatePageObject.statusAssertion('Shortlisted')
});

When("schedule an interview for the candidate", () => {
    cy.fixture('interview').as('iData')
    cy.get('@iData').then((dataInterview: any) => {
        candidatePageObject.findVacancy(vacancyName)
        candidatePageObject.scheduleInterview(empName, dataInterview.Interview_Detauls.interviewTitle, dayNextWeek)
        candidatePageObject.statusAssertion('Interview Scheduled')
    });
});

When("change the candidate status to Interview Passed", () => {
    candidatePageObject.findVacancy(vacancyName)
    candidatePageObject.markInterviewPassed()
    candidatePageObject.statusAssertion('Interview Passed')
});

When("Change the candidate status to Hired", () => {
    candidatePageObject.findVacancy(vacancyName)
    candidatePageObject.markCandidateHired()
    candidatePageObject.statusAssertion('Hired')
});

Then("delete employee + job title + vacancy", () => {
    cy.deleteEmployee(empNumber);
    cy.deleteJobTitle(jobTitleId);
    cy.deleteCandidate(candidateId);
    cy.deleteVacancy(vacancyId);
});