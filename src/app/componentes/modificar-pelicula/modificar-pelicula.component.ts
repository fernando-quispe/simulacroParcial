import { Component, EventEmitter, Input, NgModule, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modificar-pelicula',
  standalone: true,
  imports: [FormsModule, FormsModule],
  templateUrl: './modificar-pelicula.component.html',
  styleUrl: './modificar-pelicula.component.css'
})
export class ModificarPeliculaComponent implements OnInit {
  @Input() peliculaDetalle:any|Pelicula;
  @Output() onPeliculaAModifica:EventEmitter<Pelicula>=new EventEmitter();
  nuevaPelicula=Pelicula;

  constructor(){}

  ngOnInit(): void {
    
  }

  modificarPelicula(peliculaModificada:Pelicula){
    this.onPeliculaAModifica.emit(peliculaModificada);
  }
}