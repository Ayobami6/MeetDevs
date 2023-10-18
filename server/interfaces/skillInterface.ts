export interface Skill {
    talentId: string;
    name?: string;
    subSkills?: string;
}

export interface SkillResponse extends Skill {
    links?: Array<object>;
    message?: string;
}
