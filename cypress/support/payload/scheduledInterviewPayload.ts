export interface CandidateScheduleInterviewPayload {
    ScheduleInterview: {
        interviewName: string,
        interviewDate: string,
        interviewTime: string,
        note: string,
        interviewerEmpNumbers: [
            number
        ]
    }
}