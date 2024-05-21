import { Component, NgModule, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pelicula } from '../../clases/pelicula';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { PeliculaService } from '../../servicios/pelicula.service';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [MenuGralComponent, SpinnerComponent, CommonModule, NgIf, NgFor],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent implements OnInit {
  suscriptionList: Subscription = new Subscription();
  listPeliculas: Pelicula[]=[];
  loading = false;

  constructor(private afAuth: AngularFireAuth,
              private router:Router,
              private _peliculaService: PeliculaService){
  }

  ngOnInit(): void{
    this.loading=true;
    this.getPeliculas();
  }

  getPeliculas(){
    this.suscriptionList == this._peliculaService.getListadoPeliculas().subscribe(data =>{
      console.log(data);
      this.listPeliculas = [];
      
      data.forEach((element:any) => {
        this.listPeliculas.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        this.loading = false;
        console.log(element.payload.doc.id);
        console.log(element.payload.doc.data());
      });
      console.log(this.listPeliculas);
    })
  }

  ngOnDestroy(): void {
      this.suscriptionList.unsubscribe();
  }
}