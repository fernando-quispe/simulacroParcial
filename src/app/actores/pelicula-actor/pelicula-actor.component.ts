import { Component, OnInit } from '@angular/core';
import { Actor } from '../../clases/actor';
import { Subscription } from 'rxjs';
import { ActorService } from '../../servicios/actor.service';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { TablaActorPeliculaComponent } from '../../componentes/tabla-actor-pelicula/tabla-actor-pelicula.component';
import { MostrarPeliculaActorComponent } from '../../componentes/mostrar-pelicula-actor/mostrar-pelicula-actor.component';
import { MostrarPaisActorComponent } from '../../componentes/mostrar-pais-actor/mostrar-pais-actor.component';
import { MostrarDetallesActorComponent } from '../../componentes/mostrar-detalles-actor/mostrar-detalles-actor.component';

@Component({
  selector: 'app-pelicula-actor',
  standalone: true,
  imports: [MenuGralComponent, TablaActorPeliculaComponent, MostrarPeliculaActorComponent, MostrarPaisActorComponent, MostrarDetallesActorComponent],
  templateUrl: './pelicula-actor.component.html',
  styleUrl: './pelicula-actor.component.css'
})

export class PeliculaActorComponent implements OnInit {
  
  actorNombre: string; //actorNombre: string antes
  actorDetalle?: Actor;
  actores: Actor[]=[]; //actores?: Actor[]=[]; antes
  suscriptionList: Subscription=new Subscription();
  elent:boolean=false;
  actualDetalleActor?: Actor;

  constructor(private _actorService:ActorService){}

  ngOnInit(): void {
    this.getActores();
  }

  mostrarDetalleActor(actorRecibida:Actor){
    this.actualDetalleActor= actorRecibida;
    this.elent = true;
  }

  verDato(ver:boolean){
    this.elent = ver;
  }
  
  getActores(){
    this.suscriptionList == this._actorService.getListadoActores().subscribe(data =>{
      this.actores = [];
      data.forEach((element:any) => {
        this.actores.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        console.log(element.payload.doc.id);
        console.log(element.payload.doc.data());
      });
      console.log(this.actores);
    })
  }

  ngOnDestroy(): void {
      this.suscriptionList.unsubscribe();
  }
}