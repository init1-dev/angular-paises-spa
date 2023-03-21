import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  buscar( busqueda: string, termino: string ): Observable<Country[]> {
    const url: string = `${ this.apiUrl }/${ busqueda }/${ termino }`;
    
    return this.http.get<Country[]>( url )
            // .pipe(
            //   catchError( err => of([]) )
            // )
  }
  
  getPais( id: string ): Observable<Country> {
    const url: string = `${ this.apiUrl }/alpha/${ id }`;
    
    return this.http.get<Country>( url );
  }
  
}
