export interface Certifications {
    talentId: string;
    title?: string;
    description?: string;
    link?: string;
}

export interface CertificationResponse extends Certifications {
    links?: Array<object>;
    message?: string;
}