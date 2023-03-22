import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ( params ) => this.paisService.getPais( params['id'] ) ),
        tap( console.log )
      )
      .subscribe( pais => { this.pais = pais })
    
    // this.activatedRoute.params
    //   .subscribe( params => {
    //     console.log( params['id'] );
    //     this.paisService.getPais( params['id'] )
    //       .subscribe( pais => {
    //         console.log( pais );
    //       })
    //   });
  }

}
