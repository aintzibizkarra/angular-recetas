import { Pipe, PipeTransform } from '@angular/core';
import { Casa } from '../model/casa';

@Pipe({name: 'filterCasas'})
export class FilterCasas implements PipeTransform {
    transform(item: Casa[], 
              searchText: string, 
              modo:number =2,  //todos,
              precioMin:number = 0, 
              precioMax:number = 0
            ): Casa[] {

        //si no hay recetas retornar vacio
      if (!item) return [];
      if(!searchText) return item;
      let casasResultado = item;
     
      //Filtro por nombre o direccion
        searchText = searchText.toLowerCase();
        let busqueda ="";
        return casasResultado.filter(it =>{
          busqueda = it.nombre + it.direccion;
          busqueda = busqueda.toLowerCase();
          return busqueda.includes(searchText);
       });
    }
}