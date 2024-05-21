import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Actor } from '../../clases/actor';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ActorService } from '../../servicios/actor.service';
import { MenuGralComponent } from '../../shared/menu-gral/menu-gral.component';
import { SpinnerComponent } from '../../shared/spinner/spinner.component';

@Component({
  selector: 'app-listado-actores',
  standalone: true,
  imports: [MenuGralComponent, SpinnerComponent],
  templateUrl: './listado-actores.component.html',
  styleUrl: './listado-actores.component.css'
})

export class ListadoActoresComponent implements OnInit {
  suscriptionList: Subscription = new Subscription();
  listActores: Actor[]=[];
  loading = false;

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private _actorService: ActorService){
  }

  ngOnInit(): void {
    this.loading = true;
    //this.suscriptionUser = this.afAuth.user.subscribe(user => {
      //console.log(user);
      this.getActores();

      //Esto es para que este Logeado
      /* if (user && user.emailVerified) {
        // cargar listado
      } else {
        this.router.navigate(['/auth/login'])
      } */
    //})
  }
  
  getActores(){
    this.suscriptionList == this._actorService.getListadoActores().subscribe(data =>{
      //console.log(data);
      this.listActores = [];
      this.loading = false;
      data.forEach((element:any) => {
        this.listActores.push({
          id:element.payload.doc.id,
          ...element.payload.doc.data()
        })
        //console.log(element.payload.doc.id);
        //console.log(element.payload.doc.data());
      });
      //console.log(this.listJuegos);
    })
  }

  ngOnDestroy(): void {
   //this.suscriptionUser.unsubscribe();
     this.suscriptionList.unsubscribe();
  }
}