import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from '../../clases/pelicula';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla-pelicula',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tabla-pelicula.component.html',
  styleUrl: './tabla-pelicula.component.css'
})
export class TablaPeliculaComponent implements OnInit{
  public vista: boolean=true;

  @Input() listadoPeliculas:Pelicula[]=[];
  @Output() onPeliculaSelccionada:EventEmitter<Pelicula>=new EventEmitter();

  constructor(){}

  ngOnInit(): void {
    
  }

  mostrarDetallePelicula(pelicula:Pelicula){
    this.onPeliculaSelccionada.emit(pelicula);
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
