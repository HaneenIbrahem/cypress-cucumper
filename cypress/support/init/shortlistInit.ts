import { CandidateShortlistPayload } from "../payload/shortlistPayload"
import GenaricHelper from "../helpers/genericHelper";

export default class ShortlistInit {
    static initShortlist(): CandidateShortlistPayload {
        let candidateShortlistPayload: CandidateShortlistPayload = {
            ShortListed: {
                note: 'no note'
            }
        }
        return candidateShortlistPayload
    }
}