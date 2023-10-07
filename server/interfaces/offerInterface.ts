export interface Offer {
    talentId: string;
    employerId: string;
    title: string;
    description?: string;
    accepted?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}
