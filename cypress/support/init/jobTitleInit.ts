import { CreateJobTitlePayload } from "../payload/jobTitlePayload"
import GenaricHelper from "../helpers/genericHelper";

export default class JobTitleInit {
    static initJobTitle(): CreateJobTitlePayload {
        let createJobTitlePayload: CreateJobTitlePayload = {
            JobTitle: {
                    title: `Content Writer`,
                    description: "Create engaging content for blogs, articles, websites, and marketing. Research, write, and optimize for SEO.",
                    specification: "",
                    note: "This is a full-time position in our technology department"
            }
        }
        return createJobTitlePayload
    }
}