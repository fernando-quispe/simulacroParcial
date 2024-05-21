import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaActoresComponent } from './alta-actores/alta-actores.component';
import { ListadoActoresComponent } from './listado-actores/listado-actores.component';
import { PeliculaActorComponent } from './pelicula-actor/pelicula-actor.component';

const routes: Routes = [
  {path:'altaActor',component:AltaActoresComponent},
  {path:'listadoActores',component:ListadoActoresComponent},
  {path:'peliculaActor',component:PeliculaActorComponent},
  {path: '', redirectTo: 'listadoActores', pathMatch:'full'},
  {path: '**', pathMatch: 'full', redirectTo: 'bienvenido'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActoresRoutingModule { }
