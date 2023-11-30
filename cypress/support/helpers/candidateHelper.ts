import CandidateInit from "../init/candidateInit";
import { CreateCandidateResponse } from "../response/candidateResponse";

const baseUrl = Cypress.config().baseUrl

export const URLs = {
    candidate: `${baseUrl}/web/index.php/api/v2/recruitment/candidates`
}

export default class addNewCandidate {
    static addNewCandidateViaAPI(vacancyId: number) {
        return cy.addNewCandidate(URLs.candidate, CandidateInit.initCandidate(vacancyId)).then((response: CreateCandidateResponse) => {
            return {
                candidateId: response.data.id,
            };
        });
    }
}