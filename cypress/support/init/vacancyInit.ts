import { CreateVacancyPayload } from "../payload/vacancyPayload"
import GenaricHelper from "../helpers/genericHelper";

export default class VavancyInit {
    static initVacancy(jobTitleId: number, employeeId: number): CreateVacancyPayload {
        let createVacancyPayload: CreateVacancyPayload = {
            NewVacancy: {
                name: "Content Writer Position",
                jobTitleId: jobTitleId,
                employeeId: employeeId,
                numOfPositions: 5,
                description: 'We are looking for skilled content writers to create engaging and informative articles for our website.',
                status: true,
                isPublished: true
            }
        }
        return createVacancyPayload
    }
}