import { CreateCandidatePayload } from "../payload/candidatePayload"
import GenaricHelper from "../helpers/genericHelper";
import { padTo2Digits } from "../helpers/format";
const date = (new Date());
export default class CandidateInit {
    static initCandidate(vacancyId: number): CreateCandidatePayload {
        const today = [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join('-')
        let createCandidatePayload: CreateCandidatePayload = {
            NewCandidate: {
                firstName: "Rand",
                middleName: "M",
                lastName: "Khader",
                email: "Rand@gmail.com",
                contactNumber: "0578545325",
                keywords: "no keyword",
                comment: 'no comment',
                dateOfApplication: today,
                consentToKeepData: false,
                vacancyId: vacancyId
            }
        }
        return createCandidatePayload
    }
}