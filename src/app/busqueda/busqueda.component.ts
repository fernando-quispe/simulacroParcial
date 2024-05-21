import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../clases/pelicula';
import { Subscription } from 'rxjs';
import { PeliculaService } from '../servicios/pelicula.service';
import { FormsModule } from '@angular/forms';
import { AltaPeliculasComponent } from '../peliculas/alta-peliculas/alta-peliculas.component';
import { ListadoPeliculasComponent } from '../peliculas/listado-peliculas/listado-peliculas.component';
import { MenuGralComponent } from '../shared/menu-gral/menu-gral.component';
import { TablaPeliculaComponent } from '../componentes/tabla-pelicula/tabla-pelicula.component';
import { BorrarPeliculaComponent } from '../componentes/borrar-pelicula/borrar-pelicula.component';
import { DetallePeliculaComponent } from '../componentes/detalle-pelicula/detalle-pelicula.component';
import { ModificarPeliculaComponent } from '../componentes/modificar-pelicula/modificar-pelicula.component';

@Component({
  selector: 'app-busqueda',
  standalone: true,
  imports: [FormsModule, AltaPeliculasComponent,ListadoPeliculasComponent,MenuGralComponent, TablaPeliculaComponent, BorrarPeliculaComponent, DetallePeliculaComponent, ModificarPeliculaComponent],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})

export class BusquedaComponent implements OnInit{
  peliculaDetalle?:Pelicula;
  peliculas:Pelicula[]=[];
  //peliculas?:Pelicula[]=[]; saque este

  suscriptionList: Subscription = new Subscription();
  elent:boolean = false;

  constructor(private _peliculaService:PeliculaService){}

  ngOnInit(): void {
    this.getPeliculas();
  }

  getPeliculas(){
    this.suscriptionList == this._peliculaService.getListadoPeliculas().subscribe(data =>{
      console.log(data);
      this.peliculas = [];
      //this.loading = false;
      data.forEach((element:any) => {
        this.peliculas.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        console.log(element.payload.doc.id);
        console.log(element.payload.doc.data());
      });
      console.log(this.peliculas);
    })
  }

  
  mostrarDetallePelicula(peliculaRecibida:Pelicula){
    this.peliculaDetalle= peliculaRecibida;
    this.elent = true;
  }

  peliculaAVer(ver:boolean){
    this.elent = ver;
  }

  peliculaABorrar(pelicula:Pelicula){   
    
    const result = this.peliculas.filter((obj) => {
      return obj.nombre != pelicula.nombre;
    })
    
    this.peliculas = result;
    this.elent = false;
    
    //verifico los datos por consola
    /* console.log(pelicula);
    console.log("lo borra");
    console.log(this.peliculas);
    console.log('Resultado ',result); */
   
  }

  peliculaAModificar(pelicula:Pelicula){
   this._peliculaService.peliculas.forEach(element => {
      if (element.id === pelicula.id) {
          element.nombre === pelicula.nombre;
          element.cantidadDePublico === pelicula.cantidadDePublico;
          element.fechaDeEstreno === pelicula.fechaDeEstreno;
      }
    });
    this.elent = false;
  }

  ngOnDestroy(): void {
    //this.suscriptionUser.unsubscribe();
      this.suscriptionList.unsubscribe();
   }
}