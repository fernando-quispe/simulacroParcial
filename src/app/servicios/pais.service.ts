import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  getPaises(): Observable<any>{
    // return this.http.get(`https://restcountries.com/v3.1/all`);
    return this.http.get(`https://restcountries.com/v3.1/region/Americas`);
  }

  getPaisByName(name:string):Observable<any>{
    var url = "`https://restcountries.com/v3.1/name/${name}`";
    console.log(url);
    return this.http.get(`https://restcountries.com/v3.1/name/${name}`);
  }

  get httpParams () {
    return new HttpParams().set( 'fields', 'name,capital,alpha2Code,flag,population' );
  }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }
}
