export class Persona {
    id: number=0;
    nombre: string;
    apellido: string;
    titulo: string;
    aboutme: string;
    banner: string;
    img: string;
    username: string;
    cv: string;
    email: string;
    password: string;

    constructor(nombre:string, apellido:string, titulo:string, aboutme:string, banner:string, img:string, username:string, cv:string, email:string, password:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.aboutme = aboutme;
        this.banner = banner;
        this.img = img;
        this.username = username;
        this.cv = cv;
        this.email = email;
        this.password = password;
    }
}
