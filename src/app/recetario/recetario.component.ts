import { Component, OnInit } from '@angular/core';
import {Receta} from '../model/receta';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {

  listaRecetas : Array<Receta>;
  receta: Receta;

  constructor() {
    console.log('RecetarioComponent constructor'); 
    this.receta = new Receta('','','','');
    this.listaRecetas =new Array<Receta>();

    this.listaRecetas.push( new Receta('Marmitako','karlos Argiñano','assets/img/receta_Default.jpg','') );
   }
 
  ngOnInit() {
    console.log('RecetarioComponent ngOnInit');
  }

}
