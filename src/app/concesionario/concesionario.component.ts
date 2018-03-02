import { Component, OnInit } from '@angular/core';
import {Coche} from '../model/coche';


@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.scss']
})
export class ConcesionarioComponent implements OnInit {

  stock: Array<Coche>; //Array casteado a coche.

  constructor() { 

   console.log('ConcesionarioComponent Constructor');
   this.stock = new Array<Coche>();

   this.stock.push(new Coche('Seat', 'Leon'));
   this.stock.push(new Coche('Toyota', 'Verso'));
   this.stock.push(new Coche('Opel', 'Corsa',' v1.6'));
    
  }

  ngOnInit() {
    console.log('ConcesionarioComponent ngOnInit');
  }

}
