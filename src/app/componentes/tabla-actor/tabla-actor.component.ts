import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActorService } from '../../servicios/actor.service';
import { Actor } from '../../clases/actor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-actor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tabla-actor.component.html',
  styleUrl: './tabla-actor.component.css'
})
export class TablaActorComponent  implements OnInit{

  @Output() seSeleccionoActor: EventEmitter<any>=new EventEmitter<any>();
  public listaActores: Actor[]=[];

  constructor(private _actorService: ActorService){}

  ngOnInit(): void {
    let nombre:string;
    let apellido: string;
    let email: string;
    let direccion: string;
    let pais: string;
    //let id: string;
    this._actorService.getActores().subscribe((actores:any) =>{
      for (let index = 0; index < actores.length; index++) {
        const actor = actores[index];
        nombre = actor.payload.doc.data().nombre;
        apellido = actor.payload.doc.data().apellido;
        email = actor.payload.doc.data().email;
        direccion = actor.payload.doc.data().direccion;
        pais = actor.payload.doc.data().pais;
        //id = actor.payload.doc.id;
        let actorAux = new Actor(nombre, apellido, email, direccion, pais);
        //actorAux.id = id;
        this.listaActores.push(actorAux);
      }
    });
  }

  SeleccionarActor(actor: Actor) {
    this.seSeleccionoActor.emit(actor);
  } 
}