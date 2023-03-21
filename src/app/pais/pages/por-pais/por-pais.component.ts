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

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ) {
    this.termino = termino;
    
    if( this.termino !== ''){
      console.log(this.termino);
      this.hayError = false;
  
      this.paisService.buscar('name', this.termino )
        .subscribe({
          next: (paises) => {
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
    console.log(termino);
  }

}
