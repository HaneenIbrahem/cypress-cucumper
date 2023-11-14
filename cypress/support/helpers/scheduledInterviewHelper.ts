import ScheduledInterviewInit from "../init/scheduledInterviewInit";
import { CandidateScheduledInterviewResponse } from "../response/scheduledInterviewResponse";




export default class ScheduledInterviewCandidate{
    static ScheduledInterviewCandidateViaAPI(candidateId: number, empNumber: number){
        return cy.scheduledInterviewCandidate(candidateId, ScheduledInterviewInit.initScheduledInterview(empNumber))
    }
}