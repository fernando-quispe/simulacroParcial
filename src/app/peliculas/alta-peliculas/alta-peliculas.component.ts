import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { eTipo } from '../../clases/enum';
import { PeliculaService } from '../../servicios/pelicula.service';
import { ErrorService } from '../../servicios/error.service';
import { ActorService } from '../../servicios/actor.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Pelicula } from '../../clases/pelicula';
import { Actor } from '../../clases/actor'; 
import { TablaActorComponent } from '../../componentes/tabla-actor/tabla-actor.component';
import { NgFor, NgIf } from '@angular/common';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';

@Component({
  selector: 'app-alta-peliculas',
  standalone: true,
  imports: [FormsModule, TablaActorComponent, NgIf, NgFor, ReactiveFormsModule, SpinnerComponent, MenuGralComponent],
  templateUrl: './alta-peliculas.component.html',
  styleUrl: './alta-peliculas.component.css'
})
export class AltaPeliculasComponent implements OnInit{

  registrarForm: FormGroup;
  loading=false;
  public actorNombre:string;
  public opcionestipos=Object.values(eTipo);
  public obtengoFile:string;

  constructor(public _unPelicula: PeliculaService,
              private fb: FormBuilder,
              private rutas: Router,
              private _errorService: ErrorService,
              private _actoresService: ActorService,
              private toastr: ToastrService){

                this.registrarForm=this.fb.group({
                  nombre: ['',[Validators.required, Validators.minLength(4)]],
                  tipo: ['',Validators.required],
                  fechaDeEstreno: ['',Validators.required],
                  cantidadDePublico: ['',[Validators.required, Validators.min(4)]],
                  fotoDeLaPelicula: ['no la guardo aun'],
                  actorNombreApellido: ['']
                })
  }

  ngOnInit(): void {
  }
            
  registar(){
    console.log('Registar');
    this.loading = true;
  
    const datoGrabar: Pelicula = {
      id:0,
      nombre: this.registrarForm.get('nombre')?.value,
      tipo: this.registrarForm.get('tipo')?.value,                                 
      fechaDeEstreno: this.registrarForm.get('fechaDeEstreno')?.value,
      cantidadDePublico: this.registrarForm.get('cantidadDePublico')?.value,
      fotoDeLaPelicula: this.obtengoFile,
      actor: this.actorNombre
    }
    console.log('Datos a Grabar ',datoGrabar);
    this._unPelicula.crearActor(datoGrabar).then(resp => {
      this.showSuccess();
    }).catch((error) => {
      this.showError(error);
    });
    this.rutas.navigate(['peliculas/listadoPeliculas']);
  }            
            
  showSuccess() {
    this.toastr.success('Se guardó correctamente');
  }
            
  showError(error: any) {
    this.toastr.error('Algo salió mal. Error: ' + error);
  }
            
  cambiarActor(actor: Actor) {
    this.actorNombre = actor.nombre + ' ' + actor.apellido;
  }
  
  // uploadImage($event)
  uploadImage($event){
    const file = $event.target.files[0];
    this.obtengoFile = "../../assets/peliculas/"+file.name;
  }
}
