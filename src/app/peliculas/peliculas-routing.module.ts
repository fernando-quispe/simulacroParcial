import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { AltaPeliculasComponent } from './alta-peliculas/alta-peliculas.component';

const routes: Routes = [
  {path:'listadoPeliculas',component:ListadoPeliculasComponent},
  {path:'altaPeliculas',component:AltaPeliculasComponent},
  { path: '', redirectTo: 'listadoPeliculas', pathMatch:'full'},
  { path: '**', pathMatch: 'full', redirectTo: 'bienvenido'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
