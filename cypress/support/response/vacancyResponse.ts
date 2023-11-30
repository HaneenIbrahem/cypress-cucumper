export interface CreateVacancyResponse {
    data:{
        id: number,
        name: string,
        description: string,
        numOfPositions: number,
        status: boolean,
        isPublished: boolean
    }
}