// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { CreateJobTitlePayload } from "./payload/jobTitlePayload";
import { CreateJobTitleResponse } from "./response/jobTitleResponse";
import { CreateVacancyPayload } from "./payload/vacancyPayload";
import { CreateVacancyResponse } from "./response/vacancyResponse";
import { CreateCandidatePayload } from "./payload/candidatePayload";
import { CreateCandidateResponse } from "./response/candidateResponse";
import { CandidateShortlistResponse } from "./response/shortlistResponse";
import { CandidateShortlistPayload } from "./payload/shortlistPayload";
import { CandidateScheduleInterviewPayload } from "./payload/scheduledInterviewPayload";
import { CandidateScheduledInterviewResponse } from "./response/scheduledInterviewResponse";
import LoginPage from '../support/page-objects/loginPage'
import cypress from "cypress";

const loginObj: LoginPage = new LoginPage();
declare global {
    namespace Cypress {
        interface Chainable {
            // addNewUser: typeof addNewUser
            addNewJobTitle: (requestURL: string, jobTitlePayload: CreateJobTitlePayload) => Chainable<CreateJobTitleResponse>
            addNewVacancy: (requestURL: string, vacancyPayload: CreateVacancyPayload) => Chainable<CreateVacancyResponse>
            addNewCandidate: (requestURL: string, candidatePayload: CreateCandidatePayload) => Chainable<CreateCandidateResponse>
            shortlistCandidate: (candidateId: number, shortlistPayload: CandidateShortlistPayload) => Chainable<CandidateShortlistResponse>
            scheduledInterviewCandidate: (candidateId: number, scheduledInterviewPayload: CandidateScheduleInterviewPayload) => Chainable<CandidateScheduledInterviewResponse>
            deleteJobTitle: typeof deleteJobTitle
            logout: typeof logout
            login: typeof login
            addNewEmployee: typeof addNewEmployee
            addNewUser: typeof addNewUser
            deleteEmployee: typeof deleteEmployee
            deleteVacancy: typeof deleteVacancy
            deleteCandidate: typeof deleteCandidate
        }
    }

}

function logout() {
    cy.get('.oxd-userdropdown-tab').click({ force: true });
    return cy.get('.oxd-dropdown-menu').contains('Logout').click({ force: true });
}
function login(username: string, password: string) {
    cy.visit("/web/index.php/auth/login");
    loginObj.login(username, password);
}

function addNewEmployee(firstName: string, middleName: string, lastName: string, empPicture: string, employeeId: number) {
    return cy.api({
        method: 'POST',
        url: '/web/index.php/api/v2/pim/employees',
        body: {
            firstName: firstName,
            middleName: middleName,
            lastName: lastName,
            empPicture: empPicture,
            employeeId: employeeId
        }
    })
}

function deleteEmployee(empNumber: number){
    cy.api({ 
        method: 'DELETE',
        url: `/web/index.php/api/v2/pim/employees`,
        body: {
            ids: [empNumber]
        }
    })
}

function addNewUser(username: string, password: string, status: boolean, userRoleId: number, empNumber: number) {
    return cy.api({
        method: 'POST',
        url: '/web/index.php/api/v2/admin/users',
        body: {
            username: username,
            password: password,
            status: status,
            userRoleId: userRoleId,
            empNumber: empNumber
        }
    })
}

Cypress.Commands.add('addNewJobTitle', (requestURL: string, jobTitlePayload: CreateJobTitlePayload) => {
    return cy.api({
        method: 'POST',
        url: requestURL,
        body: jobTitlePayload.JobTitle,
    }).its('body')
});

function deleteJobTitle(jobTitleId: number){
    cy.api({
        method: 'DELETE',
        url: '/web/index.php/api/v2/admin/job-titles',
        body: {
            ids: [jobTitleId]
        }
    })
}

Cypress.Commands.add('addNewVacancy', (requestURL: string, vacancyPayload: CreateVacancyPayload) => {
    return cy.api({
        method: 'POST',
        url: requestURL,
        body: vacancyPayload.NewVacancy,
    }).its('body')
});

function deleteVacancy(vacancyId: number){
    cy.api({
        method: 'DELETE',
        url: '/web/index.php/api/v2/recruitment/vacancies',
        body: {
            ids: [vacancyId]
        }
    })
}

Cypress.Commands.add('addNewCandidate', (requestURL: string, candidatePayload: CreateCandidatePayload) => {
    return cy.api({
        method: 'POST',
        url: requestURL,
        body: candidatePayload.NewCandidate,
    }).its('body')
});

function deleteCandidate(candidateId: number){
    cy.api({
        method: 'DELETE',
        url: '/web/index.php/api/v2/recruitment/candidates',
        body: {
            ids: [candidateId]
        }
    })
}

Cypress.Commands.add('shortlistCandidate', (candidateId, shortlistPayload: CandidateShortlistPayload) => {
    return cy.api({
        method: 'Put',
        url: `/web/index.php/api/v2/recruitment/candidates/${candidateId}/shortlist`,
        body: shortlistPayload.ShortListed,
    }).its('body')
});

Cypress.Commands.add('scheduledInterviewCandidate', (candidateId, scheduledInterviewPayload: CandidateScheduleInterviewPayload) => {
    return cy.api({
        method: 'POST',
        url: `/web/index.php/api/v2/recruitment/candidates/${candidateId}/shedule-interview`,
        body: scheduledInterviewPayload.ScheduleInterview,
    }).its('body')
});

Cypress.Commands.add('logout', logout)

Cypress.Commands.add('login', login)

Cypress.Commands.add('addNewEmployee', addNewEmployee)

Cypress.Commands.add('addNewUser', addNewUser)

Cypress.Commands.add('deleteEmployee', deleteEmployee)

Cypress.Commands.add('deleteJobTitle', deleteJobTitle)

Cypress.Commands.add('deleteVacancy', deleteVacancy)

Cypress.Commands.add('deleteCandidate', deleteCandidate)

