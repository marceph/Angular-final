export class Persona {
    id: number=0;
    nombre: string;
    apellido: string;
    titulo: string;
    aboutme: string;
    banner: string;
    img: string;
    username: string;
    email: string;
    cv: string;

    constructor(nombre:string, apellido:string, titulo:string, aboutme:string, banner:string, img:string, username:string, email:string, cv:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.aboutme = aboutme;
        this.banner = banner;
        this.img = img;
        this.username = username;
        this.email = email;
        this.cv = cv;
    }
}
