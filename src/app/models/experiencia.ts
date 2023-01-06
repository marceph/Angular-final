export class Experiencia {
    id: number=0;
    experiencia: string;
    inicio: string;
    fin: string;
    description: string;
    logo: string;

    constructor(experiencia:string, inicio:string, fin:string, description:string, logo:string) {
        this.experiencia = experiencia;
        this.inicio = inicio;
        this.fin = fin;
        this.description = description;
        this.logo = logo;
    }
}
