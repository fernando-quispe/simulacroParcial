import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { Subscription } from 'rxjs';
import { PeliculaService } from '../../servicios/pelicula.service';
import { Actor } from '../../clases/actor'; 
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-mostrar-pelicula-actor',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './mostrar-pelicula-actor.component.html',
  styleUrl: './mostrar-pelicula-actor.component.css'
})
export class MostrarPeliculaActorComponent implements OnInit {
  @Input() actorDetalle: Actor;
  @Output() clickADetalle: EventEmitter<boolean>=new EventEmitter();

  datoActor: string;
  peliculas:Pelicula[]=[]; // peliculas?:Pelicula[]=[];
  lasPeliculas?:Pelicula[]=[];
  suscriptionList: Subscription= new Subscription();
  elent:boolean=false;

  constructor(private _peliculaService: PeliculaService){}

  ngOnInit(): void {
    this.datoActor = this.actorDetalle.nombre +' '+this.actorDetalle.apellido;
    console.log('Dato Actor para filtrar Peliculs ',this.datoActor);
    this.getPeliculas();
  }
  getPeliculas(){
    //this.datoActor = this.actorDetalle.nombre +' '+this.actorDetalle.apellido;
    this.suscriptionList == this._peliculaService.getListadoPeliculas().subscribe(data =>{
      //console.log(data);
      this.peliculas = [];
      //this.loading = false;
      data.forEach((element:any) => {
        this.peliculas.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        //console.log('Id ',element.payload.doc.id);
        //console.log('data ',element.payload.doc.data());
      });
      console.log('Listado Peliculas',this.peliculas);
      this.lasPeliculas = this.peliculas.filter(dato => dato.actor === this.datoActor);
      console.log('Peliculas ',this.lasPeliculas);
    })
  }

  Volver(peliculaDetalle:boolean){
    this.clickADetalle.emit(peliculaDetalle);
  }
}