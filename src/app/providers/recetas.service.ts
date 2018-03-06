import { Injectable } from '@angular/core';
import { Receta } from '../model/receta';
import { MOCK_RECETA } from './mock.recetas';


@Injectable()
export class RecetasService {

  recetas : Receta[];

  constructor() { 
    console.log('RecetasService constructor');
  }


  getAll():Receta[]{
    console.log('RecetasService getAll');

    let jsonData = JSON.parse(MOCK_RECETA.recetario);
    this.recetas = [];
    let receta;

    jsonData.forEach( el => {
       receta = new Receta( el.nombre, el.cocinero, el.foto, el.descripcion, el.likes);
       
       el.ingredientes.forEach( ing => {
          receta.addingrediente(ing);
       });

       this.recetas.push(receta);
    });

    return this.recetas;
  }

}