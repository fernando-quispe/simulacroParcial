import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AltaPeliculasComponent } from '../../peliculas/alta-peliculas/alta-peliculas.component';
import { ListadoPeliculasComponent } from '../../peliculas/listado-peliculas/listado-peliculas.component';
import { AltaActoresComponent } from '../../actores/alta-actores/alta-actores.component';
import { ListadoActoresComponent } from '../../actores/listado-actores/listado-actores.component';

@Component({
  selector: 'app-menu-gral',
  standalone: true,
  imports: [FormsModule, MenuGralComponent,AltaPeliculasComponent,ListadoPeliculasComponent, AltaActoresComponent, ListadoActoresComponent],
  templateUrl: './menu-gral.component.html',
  styleUrl: './menu-gral.component.css'
})

export class MenuGralComponent implements OnInit{

  constructor(private rutas: Router){}

  ngOnInit(): void {
  }



  inicio(){
    this.rutas.navigate(['inicio']);
  }

  bienvenido(){        
    this.rutas.navigate(['bienvenido']);    
  }

  busqueda(){
    this.rutas.navigate(['busqueda']);
  }

  // Peliculas
  altaPelicula(){
    this.rutas.navigate(['peliculas/altaPeliculas']);
  }
  listadoPelicula(){
    this.rutas.navigate(['peliculas/listadoPeliculas']);
  }

  // Actores
  actor(){
    this.rutas.navigate(['actores/altActor']);
  }
  listadoActor(){
    this.rutas.navigate(['actores/alta-actores/alta-actores']);
  }
  peliculaActor(){
    this.rutas.navigate(['actores/peliculaActor']);
  }


  //Prueba
  async bienvenido1(){        
    this.rutas.navigateByUrl('/bienvenido');    
  }

  async busqueda1(){        
    this.rutas.navigateByUrl('/busqueda');    
  }

  async peliculas1(){        
    this.rutas.navigateByUrl('/peliculas/altaPeliculas');    
  }

  async actor1(){        
    this.rutas.navigateByUrl('/actores/altActor');    
  }
}