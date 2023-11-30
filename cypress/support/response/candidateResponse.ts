export interface CreateCandidateResponse {
    data:{
        id: number, 
        firstName: string, 
        middleName: null, 
        lastName: string, 
        email: string, 
        contactNumber: null, 
        comment: null, 
        keywords: null, 
        modeOfApplication: Number, 
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
            id: number, 
            label: string 
        }, 
        hasAttachment: boolean, 
        consentToKeepData: boolean 
    }, 
    meta: [], 
    rels: []
}