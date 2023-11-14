export interface CreateJobTitleResponse {
    data:{
        id: number,
        title: string,
        description: string,
        note: string,
        jobSpecification: {
            id: number,
            filename: string,
            fileType: string,
            fileSize: number
        }
    }
}