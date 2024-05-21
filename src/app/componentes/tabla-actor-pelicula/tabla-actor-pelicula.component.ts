import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Actor } from '../../clases/actor';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-actor-pelicula',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tabla-actor-pelicula.component.html',
  styleUrl: './tabla-actor-pelicula.component.css'
})
export class TablaActorPeliculaComponent implements OnInit {
  public vista:boolean=true;
  @Input() listadoActores:Actor[]=[];
  @Output() onActorSelccionado:EventEmitter<Actor>=new EventEmitter();

  constructor(){}

  ngOnInit(): void {
  
  }

  mostrarDetalleActor(actor:Actor){
    this.onActorSelccionado.emit(actor);
  }

  CambiarVista() {
    if (this.vista == true) {
      this.vista = false;
    }
    else {
      this.vista = true;
    }
  }

}