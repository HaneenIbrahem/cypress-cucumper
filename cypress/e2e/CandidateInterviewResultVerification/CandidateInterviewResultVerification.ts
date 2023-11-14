import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import addJobTitle from "../../support/helpers/jobTitleHelper";
import addNewVacancy from "../../support/helpers/vacancyHelper";
import LoginPage from '../../support/page-objects/loginPage'
import addNewCandidate from "../../support/helpers/candidateHelper";
import ShortlistCandidate from "../../support/helpers/shortlistHelper"
import ScheduledInterviewCandidate from "../../support/helpers/scheduledInterviewHelper";
import CandidatePage from "../../support/page-objects/candidatesPage";

const candidatePageObject: CandidatePage = new CandidatePage()
let jobTitleId: number
let jobTitle: string
let employeeId: number
let empNumber: number
let vacancyId: number
let vacancyName: string
let candidateId: number
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
    }).then(() => {
      cy.addNewUser(dataEmp.addUser.username, dataEmp.addUser.password, dataEmp.addUser.status, dataEmp.addUser.userRoleId, empNumber)
    })
  })
});

Given("create new job title", ()=>{
  addJobTitle.addNewJobTitleViaAPI().then(jobTitleInfo => {
    jobTitleId = jobTitleInfo.id;
    jobTitle = jobTitleInfo.title;
  });
});

Given("create new job vacancy", ()=>{
  addNewVacancy.addNewVacancyViaAPI(jobTitleId, empNumber).then(vacancyInfo =>{
    vacancyId = vacancyInfo.vacancyId
    vacancyName = vacancyInfo.vacancyName
    })
});

Given("create new candidate", ()=>{
  addNewCandidate.addNewCandidateViaAPI(vacancyId).then(candidateInfo =>{
    candidateId = candidateInfo.candidateId
    })
});

Given("shortlist the candidate", ()=>{
  ShortlistCandidate.shortlistCandidateViaAPI(candidateId)
});

Given("schedule an interview for the candidate", ()=>{
  ScheduledInterviewCandidate.ScheduledInterviewCandidateViaAPI(candidateId, empNumber)
});

When("change the candidate status to Interview Passed", () => {
  candidatePageObject.findVacancy(vacancyName) 
  candidatePageObject.markInterviewPassed()
});

When("change the candidate status to Interview Failed", () => {
  candidatePageObject.findVacancy(vacancyName) 
  candidatePageObject.markInterviewFailed()
});

When("Change the candidate status to Hired", () => {
  candidatePageObject.findVacancy(vacancyName) 
  candidatePageObject.markInterviewPassed()
  candidatePageObject.markCandidateHired()
});

Then("delete employee + job title + vacancy {string}", (status) => {
  cy.get('.orangehrm-recruitment-status > .oxd-text', { timeout: 40000 }).should('contain', status);
  cy.deleteEmployee(empNumber);
  cy.deleteJobTitle(jobTitleId);
  cy.deleteCandidate(candidateId);
  cy.deleteVacancy(vacancyId);
});

