import { eTipo } from "./enum";

export class Pelicula {
    id: number;
    nombre: string;
    tipo: eTipo;
    fechaDeEstreno: string;
    cantidadDePublico: number;
    fotoDeLaPelicula: string;
    actor: string;
    //actorId: string;

    constructor( 

    id: number,
    nombre: string,
    tipo: eTipo,
    fechaDeEstreno: string,
    cantidadDePublico: number,
    fotoDeLaPelicula: string,
    actor: string){

        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fechaDeEstreno = fechaDeEstreno;
        this.cantidadDePublico = cantidadDePublico;
        this.fotoDeLaPelicula = fotoDeLaPelicula;
        this.actor = actor;
    }
}