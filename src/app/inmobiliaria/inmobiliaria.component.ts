import { Component, OnInit } from '@angular/core';
import { Casa } from '../model/casa';
import { CasaService } from '../providers/casa.service';
import { Servicio } from '../model/servicios';

@Component({
  selector: 'app-inmobiliaria',
  templateUrl: './inmobiliaria.component.html',
  styleUrls: ['./inmobiliaria.component.scss']
})
export class InmobiliariaComponent implements OnInit {

  
  casas : Casa[];
  servicio: Servicio[];
  casaSelec : Casa;
  

  constructor(public casaService: CasaService) {

    console.log("InmobiliariaComponent constructor");
    
    this.casas = [];
    this.servicio =[];
   }

  ngOnInit() {

    console.log("InmobiliariaComponent OnInit");
    this.casaSelec = this.casas[0] || new Casa ();
    

    this.casaService.getAll().subscribe(
      resultado =>{
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);

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
    let servicio : Servicio;

    result.forEach(el=> {
      casa = new Casa();
      casa.nombre= el.nombre;
      casa.direccion = el.direccion;
      casa.precio= el.precio;
      casa.habitaciones = el.habitaciones;
      casa.foto =el.foto;
      casa.alquiler= el.alquiler;
      /*casa.servicios= el.servicio.forEach(s => {
          servicio = new Servicio();
          servicio.nombre = s.nombre;
          servicio.disponible = s.disponible;
          casa.servicios.push(s);

        });*/
        
      

      this.casas.push(casa);

    
      
    });

  }

  seleccionarCasa( casa : Casa ){
    console.log('RecetarioComponent seleccionarReceta');
    this.casaSelec = casa;
  }
 

}
