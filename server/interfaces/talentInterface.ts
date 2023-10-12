export interface Talent {
    name: string;
    email: string;
    hashedPassword: string;
    jobRole: string;
    location?: string;
    hasOffer: boolean;
    rank: number;
    socials?: Array<string>;
    github?: string;
    bio?: string;
    profileImg?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
