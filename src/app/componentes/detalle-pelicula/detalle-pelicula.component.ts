import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle-pelicula',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './detalle-pelicula.component.html',
  styleUrl: './detalle-pelicula.component.css'
})
export class DetallePeliculaComponent implements OnInit{

  @Input() peliculaDetalle: Pelicula;
  @Output() onPeliculaADetalle:EventEmitter<boolean>=new EventEmitter();

  constructor(){}

  ngOnInit(): void {
    
  }

  limpiar(peliculaDetalle:boolean){
    this.onPeliculaADetalle.emit(peliculaDetalle);
  }
}