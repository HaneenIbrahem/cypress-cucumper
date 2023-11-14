import VavancyInit from "../init/vacancyInit";
import { CreateVacancyResponse } from "../response/vacancyResponse";

const baseUrl = Cypress.config().baseUrl

export const URLs = {
    vacancy: `${baseUrl}/web/index.php/api/v2/recruitment/vacancies`
}

export default class addNewVacancy{
    static addNewVacancyViaAPI(jobTitleId: number, employeeId: number){
        return cy.addNewVacancy(URLs.vacancy, VavancyInit.initVacancy(jobTitleId, employeeId)).then((response: CreateVacancyResponse) => {
            return {
                vacancyId: response.data.id,
                vacancyName: response.data.name
              };
            });
    }
}