import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.scss']
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  sugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ) {
    this.termino = termino;
    
    if( this.termino !== ''){
      console.log(this.termino);
      this.mostrarSugerencias = false;
      this.hayError = false;
  
      this.paisService.buscar('name', this.termino )
        .subscribe({
          next: (paises) => {
            console.log(paises)
            this.paises = paises;
          },
          error: (err) => {
            this.hayError = true;
            this.paises = [];
          }
        });
    }
  }

  sugerencias( termino: string ) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = false;
    if(termino !== ''){
      this.mostrarSugerencias = true;
      
      this.paisService.buscar('name', termino)
        .subscribe({
          next: (paises) => {
            this.sugeridos = paises.splice(0, 5);
          },
          error: (err) => {
            this.sugeridos = [];
          }
        })      
    }
  }

  buscarSugerido( termino: string ) {
    this.buscar( termino );
  }

}
