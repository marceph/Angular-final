export class Skill {
    id: number=0;
    skill: string;
    percentage: number;

    constructor(skill:string, percentage:number) {
        this.skill = skill;
        this.percentage = percentage;
    }
}
