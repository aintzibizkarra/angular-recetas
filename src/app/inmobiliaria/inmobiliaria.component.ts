import { Component, OnInit } from '@angular/core';
import { Casa } from '../model/casa';
import { CasaService } from '../providers/casa.service';
import { Servicio } from '../model/servicios';
import { element } from 'protractor';

@Component({
  selector: 'app-inmobiliaria',
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.scss']
})
export class InmobiliariaComponent implements OnInit {

  
  casas : Casa[];
  servicio: Servicio[];
  casaSelec : Casa;
  
  //filtro
  searchText: string;
  modo:number;
  precioMin:number;
  precioMax: number;
  

  constructor(public casaService: CasaService) {
    console.log("InmobiliariaComponent constructor");
    //inicializar las variables
    this.casas = [];
    this.servicio =[];
    

    

   }

  ngOnInit() {

    console.log("InmobiliariaComponent OnInit");
    
    this.casaService.getAll().subscribe(
      resultado =>{
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
        this.casaSelec = this.casas[0] || new Casa ();
        this.modo =2;
        this.precioMin = 0;
        this.precioMax = 0;
      },
      error=>{
        console.warn('Peticion incorrecta %o', error);

      } 

    );//suscribe 
  }

  
/**
   * Mapea los datos en formato Json a TODOS que provienen del servicio REST
   * @param resultado : any
   */
  mapeo(result : any){

    let casa : Casa;
    let servicios: Servicio;

    result.forEach(el=> {
      casa = new Casa();
      casa.nombre= el.nombre;
      casa.direccion = el.direccion;
      casa.precio= el.precio;
      casa.habitaciones = el.habitaciones;
      casa.foto =el.foto;
      casa.alquiler= el.alquiler;
      /*result.servicio.forEach(element=> {
        servicios = new Servicio();
        servicios.nombre=element.nombre;
        servicios.disponible=element.disponible;
        this.servicio.push(servicios);
      });*/
     this.casas.push(casa);
    });

  }

  seleccionarCasa( casa : Casa ){
    console.log('RecetarioComponent seleccionarReceta');
    this.casaSelec = casa;
  }
 

}
