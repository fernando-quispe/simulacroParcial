import { Component, NgModule, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActorService } from '../../servicios/actor.service';
import { ErrorService } from '../../servicios/error.service';
import { PaisService } from '../../servicios/pais.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Actor } from '../../clases/actor';
import { Pais } from '../../clases/pais';
import { ɵcamelCaseToDashCase } from '@angular/animations/browser';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { TablaPaisComponent } from '../../componentes/tabla-pais/tabla-pais.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-alta-actores',
  standalone: true,
  imports: [FormsModule, MenuGralComponent, ReactiveFormsModule, SpinnerComponent, TablaPaisComponent, NgFor, NgIf],
  templateUrl: './alta-actores.component.html',
  styleUrl: './alta-actores.component.css'
})

export class AltaActoresComponent implements OnInit {

  actor:any|Actor;
  paisSeleccionado:any|Pais;
  paises:any|Pais=[];
  registrarForm: FormGroup;
  loading=false;  
 
  
  public pais:string="Elegir Pais"; //ver este tema
  //public pais: keyof typeof this.paisSeleccionado; //agregue

  constructor(public _unActor: ActorService,
              private fb: FormBuilder,
              private rutas: Router,
              private _errorService: ErrorService,
              private _paisesService: PaisService,
              private toastr: ToastrService
              ){

                this.registrarForm=this.fb.group({
                  nombre: ['',[Validators.required, Validators.minLength(4)]],
                  apellido: ['',[Validators.required, Validators.minLength(4)]],
                  email: ['',[Validators.required, Validators.email]],
                  direccion: ['',[Validators.required, Validators.minLength(4)]],
                })
  }

  ngOnInit(): void {
    this._paisesService.getPaises().subscribe(
      data=>{
        this.paisSeleccionado=data;
      }
    )
  }

  mostrarPais(paisNombre:string){
    this.pais=paisNombre;
  }

  registar(){
    console.log('Registar');
    this.loading = true;
    const datoGrabar: Actor = {
      nombre: this.registrarForm.get('nombre')?.value,
      apellido: this.registrarForm.get('apellido')?.value,
      email: this.registrarForm.get('email')?.value,
      direccion: this.registrarForm.get('direccion')?.value,
      pais:this.pais
    }
    this._unActor.crearActor(datoGrabar).then(resp => {
      this.showSuccess();
    }).catch((error) => {
      this.showError(error);
    });
    this.rutas.navigate(['actores/listadoActores']);
  }

  showSuccess() {
    this.toastr.success('Se guardó correctamente');
  }

  showError(error: any) {
    this.toastr.error('Algo salió mal. Error: ' + error);
  }
}