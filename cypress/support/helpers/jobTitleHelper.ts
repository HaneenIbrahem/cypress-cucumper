import JobTitleInit from "../init/jobTitleInit"
import { CreateJobTitleResponse } from "../response/jobTitleResponse";

const baseUrl = Cypress.config().baseUrl

export const URLs = {
    jobTitle: `${baseUrl}/web/index.php/api/v2/admin/job-titles`
}

export default class addJobTitle{
    static addNewJobTitleViaAPI(){
        return cy.addNewJobTitle(URLs.jobTitle, JobTitleInit.initJobTitle()).then((response: CreateJobTitleResponse) => {
            return {
                id: response.data.id,
                title: response.data.title
              };
        });
    }
}
