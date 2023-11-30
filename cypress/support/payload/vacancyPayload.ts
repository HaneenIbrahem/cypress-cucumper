export interface CreateVacancyPayload {
    NewVacancy: {
        name: string,
        jobTitleId: number,
        employeeId: number,
        numOfPositions: number,
        description: string,
        status: boolean,
        isPublished: boolean
    }
}
