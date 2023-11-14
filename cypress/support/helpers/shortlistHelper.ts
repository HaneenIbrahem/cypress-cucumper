import ShortlistInit from "../init/shortlistInit";
import { CandidateShortlistResponse } from "../response/shortlistResponse";




export default class ShortlistCandidate{
    static shortlistCandidateViaAPI(candidateId: number){
        return cy.shortlistCandidate(candidateId, ShortlistInit.initShortlist())
    }
}