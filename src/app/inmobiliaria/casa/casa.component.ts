import { Component, OnInit, Input } from '@angular/core';
import { Casa } from '../../model/casa';
import { CasaService } from '../../providers/casa.service';

@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.scss']
})
export class CasaComponent implements OnInit {
 
  
  @Input('casa') casadetalle : Casa;
  
  constructor(public casaService: CasaService) {
    console.log("CasaComponent constructor");
    this.casadetalle = new Casa();   
  }

  ngOnInit() {
    console.log("CasaComponent OnInit");
    console.log('Detalle de la casa: %o', this.casadetalle);    
  }
}
