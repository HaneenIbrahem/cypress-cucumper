export interface CandidateShortlistResponse {
    data:{ 
        id: number, 
        firstName: string, 
        middleName: string, 
        lastName: string, 
        email: string, 
        contactNumber: string, 
        comment: string, 
        keywords: string, 
        modeOfApplication: number, 
        dateOfApplication: string, 
        vacancy: { 
            id: number, 
            name: string, 
            status: boolean, 
            jobTitle: { 
                id: number, 
                title: string, 
                isDeleted: boolean 
            }, 
            hiringManager: { 
                id: number, 
                firstName: string, 
                middleName: string, 
                lastName: string, 
                terminationId: null 
            } 
        }, 
        status: { 
            id: Number, 
            label: string 
        }, 
        hasAttachment: boolean, 
        consentToKeepData: boolean 
    } 
}
