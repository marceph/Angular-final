export class Habilidad {
    id: number=0;
    habilidad: string;
    porcentaje: number;

    constructor(habilidad:string, porcentaje:number) {
        this.habilidad = habilidad;
        this.porcentaje = porcentaje;
    }
}
