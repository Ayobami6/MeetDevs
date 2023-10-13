export interface Experience {
    talentId: string;
    jobTitle: string;
    employer: string;
    startDate: Date;
    endDate: Date;
    country: string;
    description: string;
}

export interface ExperienceResponse extends Experience {
    links?: Array<object>;
    message?: string;
}
