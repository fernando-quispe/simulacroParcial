import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';

@Component({
  selector: 'app-borrar-pelicula',
  standalone: true,
  imports: [],
  templateUrl: './borrar-pelicula.component.html',
  styleUrl: './borrar-pelicula.component.css'
})
export class BorrarPeliculaComponent implements OnInit{
  @Input() peliculaDetalle: Pelicula;
  @Output() onPeliculaABorrar:EventEmitter<Pelicula>=new EventEmitter();

  constructor(){}

  ngOnInit(): void {
    
  }

  borrarPelicula(pelicula:Pelicula){
    this.onPeliculaABorrar.emit(pelicula);
  }
}