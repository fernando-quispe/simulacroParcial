import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { GithubComponent } from './github/github.component';
import { MenuGralComponent } from './menu-gral/menu-gral.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { BienvenidoComponent } from '../bienvenido/bienvenido.component';


@NgModule({
  declarations: [
    GithubComponent,
    MenuGralComponent,
    SpinnerComponent,
    BienvenidoComponent
  ],
  exports:[
    MenuGralComponent,
    GithubComponent,
    BienvenidoComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgModule
  ]
})
export class SharedModule { }
