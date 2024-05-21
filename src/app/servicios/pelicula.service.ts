import { Injectable } from '@angular/core';
import { Pelicula } from '../clases/pelicula';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

   /* peliculas: Pelicula[]=[
    {id: 1, nombre: 'Shrek', tipo: eTipo.Comedia, fechaDeEstreno:'18/05/2001', cantidadDePublico:10, fotoDeLaPelicula:'https://xl.movieposterdb.com/21_09/2001/126029/xl_126029_26c17ee4.jpg'},
    {id: 2, nombre: 'Shrek 2 ', tipo: eTipo.Amor, fechaDeEstreno:'21/05/2004', cantidadDePublico:10, fotoDeLaPelicula:'https://static.posters.cz/image/750/posters/shrek-2-one-sheet-i653.jpg'},
    {id: 3, nombre: 'Shrek Tercero', tipo: eTipo.Terror, fechaDeEstreno:'18/05/2007', cantidadDePublico:10, fotoDeLaPelicula:'https://es.web.img3.acsta.net/medias/nmedia/18/68/23/20/20054548.jpg'},
    {id: 4, nombre: 'Shrek Para Siempre', tipo: eTipo.Otros, fechaDeEstreno:'21/05/2010', cantidadDePublico:10, fotoDeLaPelicula:'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/17c2c2152f507492dcbae81b3fcfa43c1fd82cbf75d168b8d2b2331bbbd5712f._RI_V_TTW_.jpg'}

  ]; */

  peliculas: Pelicula[]=[];

  constructor(private _firestore: AngularFirestore) { }

  crearActor(peliculaDato:Pelicula){
    return this._firestore.collection('peliculas').add(peliculaDato);
  }

  getListadoPeliculas(): Observable<any>{
    return this._firestore.collection('peliculas').stateChanges();
  }
}
