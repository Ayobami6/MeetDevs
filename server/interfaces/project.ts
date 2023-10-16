export interface Project {
    talentId: string;
    name?: string;
    description?: string;
    startDate?: string;
    endDate?: string;
    link?: string;
}

export interface ProjectResponse extends Project {
    links?: Array<object>;
    message?: string;
}