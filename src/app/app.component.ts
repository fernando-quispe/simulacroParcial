import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { SharedModule } from "./shared/shared.module";
import { FormsModule } from '@angular/forms';
import { MenuGralComponent } from './shared/menu-gral/menu-gral.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ListadoActoresComponent } from './actores/listado-actores/listado-actores.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';

@Component({
    selector: 'app-root',    
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
    imports: [RouterOutlet, FormsModule, MenuGralComponent, BienvenidoComponent, BusquedaComponent, ListadoActoresComponent, ListadoPeliculasComponent]
})

export class AppComponent{
  title = 'simulacroparcial';

}
