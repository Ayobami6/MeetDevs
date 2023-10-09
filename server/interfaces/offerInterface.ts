export interface Offer {
    talentId?: string;
    employerId?: string;
    title?: string;
    description?: string;
    accepted?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ResponseDocument extends Offer {
    links?: Array<object>;
    message?: string;
}
