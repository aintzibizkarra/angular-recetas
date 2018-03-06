import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../model/receta';

@Pipe({
    name: 'filterReceta'
})
export class RecetaPipe implements PipeTransform {
    transform(stock: Receta[], searchText: string): Receta[] {

        if(!stock) return [];
        if(!searchText) return stock;
        searchText = searchText.toLowerCase();
        let nombre = "";
        return stock.filter( cocineroIt  => {
            nombre = cocineroIt.nombre ;
            nombre = nombre.toLowerCase();
            return nombre.includes(searchText);
            
        });
       }
}

