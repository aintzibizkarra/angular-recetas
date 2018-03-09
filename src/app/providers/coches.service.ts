import { Injectable } from '@angular/core';
import { Coche } from '../model/coche';
import { MOCKS_COCHES } from './mocks.coches';
import { element } from 'protractor';

@Injectable()
export class CochesService {

  coche: Coche[];

  constructor() { 
    console.log('CochesService constructor');
  }

  /** 
   * Retorna todos los Coches que tenemos en Stock
  */
  getAll():Coche[]{
    console.log('CochesService getAll');
    let coches:Coche[] = [];
    let coche;
    
    let jsonData = JSON.parse(MOCKS_COCHES.stock);

    jsonData.forEach( element => {
      
        coche = new Coche( 
                          element.marca, 
                          element.modelo, 
                          element.puertas,
                          element.caballos,
                          element.consumo,
                          element.foto,
                          element.version
                          );

        coches.push(coche);

    });

    return coches;
  }

    /**
   * Crear Nueva Coche
   * @param coche : Coche nueva
   */
  crearCoche( coche: Coche ):void{
    console.log('CochesService crear %o', coche );
    this.coche.unshift(coche);
  }


}