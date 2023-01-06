export class Proyecto {
    id: number=0;
    proyecto: string;
    fin: string;
    description: string;
    link: string;
    logo: string;

    constructor(proyecto:string, fin:string, description:string, link:string, logo:string) {
        this.proyecto = proyecto;
        this.fin = fin;
        this.description = description;
        this.link = link;
        this.logo = logo;
    }
}
