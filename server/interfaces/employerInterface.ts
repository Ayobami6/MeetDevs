export interface Employer {
    name: string;
    email: string;
    password: string;
    companyName?: string;
    profileImg?: string;
    companyUrl?: string;
    socials?: Array<string>;
    createdAt: Date;
}
