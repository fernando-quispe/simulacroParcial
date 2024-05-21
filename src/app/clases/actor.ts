export class Actor {
    nombre: string;
    apellido: string;
    email: string;
    direccion: string;
    pais:string;

    constructor(nombre: string, apellido: string, email: string, direccion: string, pais: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.direccion = direccion;
        this.pais = pais;
    }
}