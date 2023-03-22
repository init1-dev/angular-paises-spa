import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC',];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  getClaseCSS( region: string ){
    return (region === this.regionActiva) ? 'btn-primary' : 'btn-outline-primary'
  }

  activarRegion( region: string ) {
    if( region !== this.regionActiva ){
      this.regionActiva = region;
      this.paises = [];
  
      this.paisService.buscarRegion( region )
        .subscribe( paises => {
          console.log(paises);
          this.paises = paises
        })
    }
  }

  ngOnInit(): void {
  }

}
