export interface Talent {
    name: string;
    email: string;
    hashedPassword: string;
    experience?: Array<Experience>;
    skill?: Array<string>;
    education?: Array<Education>;
    hasOffer: boolean;
    rank: number;
    socials?: Array<string>;
    github?: string;
    bio?: string;
    profileImg?: string;
    certifications?: Array<Certification>;
    projects?: Array<Project>;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Experience {
    jobTitle: string;
    city: string;
    country: string;
    employer?: string;
    startDate: Date;
    endDate?: Date;
    description?: string;
}

export interface Education {
    degree: string;
    school: string;
    country: string;
    city: string;
    description: string;
    startDate: Date;
    endDate?: Date;
}

export interface Certification {
    title: string;
    link: string;
}

export interface Project {
    name: string;
    description: string;
    link: string;
}
