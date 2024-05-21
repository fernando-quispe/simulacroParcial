import { Injectable } from '@angular/core';
import { Actor } from '../clases/actor';
//  import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private _firestore: AngularFirestore) { }

  crearActor(actorDato:Actor){
    return this._firestore.collection('actores').add(actorDato);
  }

  getListadoActores(): Observable<any>{
    return this._firestore.collection('actores').stateChanges();
  }

  getActores() {
    return this._firestore.collection("actores").snapshotChanges();
  }
}