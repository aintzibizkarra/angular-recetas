import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';

@Pipe({name: 'filterCasas'})
export class FilterCasas implements PipeTransform {
    transform(casas: Casa[], searchText: string , alquiler:boolean): Casa[] {
        //si no hay recetas retornar vacio
    if (!casas) return [];

    let casasFilterArray: Casa[] = [];

     //Filtramos si están alquiladas o no
    if (alquiler) {
        casas.forEach(it => {
          if (it.alquiler) {
            casasFilterArray.push(it);
          }
        });
      } else {
        casasFilterArray = casas;
      }

        //De los que quedan filtramos por texto si hay
    if (!searchText) {
        return casasFilterArray;
      } else {
        searchText = searchText.toLowerCase();
        let casas = '';
        return casasFilterArray.filter(it => {
          casas = it.nombre + it.direccion;
          casas = casas.toLowerCase();
          return casas.includes(searchText);
        });
      }

    }
}