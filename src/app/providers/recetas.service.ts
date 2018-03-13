import { Injectable } from '@angular/core';
import { Receta } from '../model/receta';
import { MOCK_RECETA } from './mock.recetas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';

@Injectable()
export class RecetasService {

  recetas : Receta[];

  constructor(public http: HttpClient) { 
    console.log('RecetasService constructor');
  }


  getAll():Receta[]{
    console.log('RecetasService getAll');
    let jsonData = JSON.parse(MOCK_RECETA.recetario);
    this.recetas = [];
    let receta;

    jsonData.forEach( el => {
       receta = new Receta( el.nombre, el.cocinero);
       receta.id = el.id;
       receta.ingredientes = el.ingredientes;
       receta.imagen = el.foto;
       receta.likes = el.likes;
       receta.cocinero = el.cocinero;
       receta.descripcion = el.descripcion;
       receta.isGlutenFree = el.isGlutenFree;

       this.recetas.push(receta);
    });

    return this.recetas;
  }

  /**
   * Crear Nueva Receta
   * @param receta : Receta nueva
   */
  crear( receta: Receta ):void{
    console.log('RecetasService crear %o', receta );
    this.recetas.unshift(receta);
  }

 
}