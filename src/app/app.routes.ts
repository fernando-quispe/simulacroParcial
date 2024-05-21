import { Routes, RouterModule } from '@angular/router';
import { MenuGralComponent } from './shared/menu-gral/menu-gral.component';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { NgModule } from '@angular/core';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { FormsModule } from '@angular/forms';
import { BusquedaComponent } from './busqueda/busqueda.component';


export const routes: Routes = [
  
  { path: 'bienvenido',component: BienvenidoComponent},
  { path: 'menu-gral',component: MenuGralComponent},
  { path: 'busqueda',component: BusquedaComponent },
  {
    path: 'peliculas',
          loadChildren: () => import('./peliculas/peliculas.module')
          .then(m => m.PeliculasModule)
  },
  {
    path: 'actores',
          loadChildren: () => import('./actores/actores.module')
          .then(m => m.ActoresModule)
  },
  /*
  {
    path: 'pizzas',
          loadChildren: () => import('./pizzas/pizzas.module')
          .then(m => m.PizzasModule)
  },*/
  { path: '', redirectTo: 'bienvenido', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: 'bienvenido' }
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes),FormsModule],
  exports: [RouterModule]
})

export class AppRoutingModule { }

function canActivate(arg0: string, canActivate: any, arg2: any[]) {
  throw new Error('Function not implemented.');
}