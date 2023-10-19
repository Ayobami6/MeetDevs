export interface TalentScore {
    talentId: string;
    score: number;
}

export interface TalentScoreResponse extends TalentScore {
    message?: string;
}
