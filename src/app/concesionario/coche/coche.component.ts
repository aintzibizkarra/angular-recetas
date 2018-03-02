import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coche } from '../../model/coche';


@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {
  
  //Parametro de Entrada desde el Componete Padre al Hijo
  @Input('cocheParametro') coche : Coche;

  //los parametros de salida se realizan a traves de Eventos
  @Output() cocheSeleccionado = new EventEmitter();

  constructor() {
    console.log('CocheComponent constructor');
  }

  ngOnInit() {
    console.log('CocheComponent ngOnInit');
  }
  
  /**
   * Funcion para Emitir el Evento desde el Hijo hacia el Padre
   */
  seleccionar($event){
    console.log('CocheComponent: Emitimos evento al ComponentePadre %o', this.coche );
    this.cocheSeleccionado.emit({ "coche": this.coche });
  }
 

}