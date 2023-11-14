import { CandidateScheduleInterviewPayload } from "../payload/scheduledInterviewPayload"
import GenaricHelper from "../helpers/genericHelper";
import { padTo2Digits } from "../helpers/format";
const date = (new Date());

export default class ScheduledInterviewInit {
    static initScheduledInterview(empNumber: number): CandidateScheduleInterviewPayload {
        const today = [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join('-')
        let candidateScheduleInterviewPayload: CandidateScheduleInterviewPayload = {
            ScheduleInterview: {
                interviewName: "First interview",
                interviewDate: today,
                interviewTime: "01:00",
                note: "no note",
                interviewerEmpNumbers: [
                    empNumber
                ]
            }
        }
        return candidateScheduleInterviewPayload
    }
}