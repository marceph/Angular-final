export class Estudio {
    id: number=0;
    estudio: string;
    inicio: string;
    fin: string;
    description: string;
    logo: string;

    constructor(estudio:string, inicio:string, fin:string, description:string, logo:string) {
        this.estudio = estudio;
        this.inicio = inicio;
        this.fin = fin;
        this.description = description;
        this.logo = logo;
    }
}
