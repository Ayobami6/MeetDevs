export interface Education {
    talentId: string;
    degree?: string;
    school?: string;
    country?: string;
    city?: string;
    startDate?: string;
    endDate?: string;
    description?: string;
}

export interface EducationResponse extends Education {
    links?: Array<object>;
    message?: string;
}