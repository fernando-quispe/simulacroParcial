import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { AltaPeliculasComponent } from './alta-peliculas/alta-peliculas.component';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { TablaActorComponent } from '../componentes/tabla-actor/tabla-actor.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { MenuGralComponent } from '../shared/menu-gral/menu-gral.component';


@NgModule({
  declarations: [
    AltaPeliculasComponent,
    ListadoPeliculasComponent,
    TablaActorComponent    
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    SpinnerComponent,
    MenuGralComponent,
    AltaPeliculasComponent,
    ListadoPeliculasComponent,
    NgModule
  ]
})

export class PeliculasModule { }
