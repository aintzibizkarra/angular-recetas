import { Pipe, PipeTransform } from '@angular/core';
import { Receta } from '../model/receta';

@Pipe({
    name: 'filterReceta'
})
export class RecetaPipe implements PipeTransform {
    transform(recetas: Receta[], searchText: string, isGlutenFree:boolean): Receta[] {
       //Si no hay recetas retornar vacio
        if(!recetas) {return [];}

        //Si no hay busqueda y es libre de gluten (isGlutenFree es vacio) devuelve recetas sin gluten
        if(!searchText && isGlutenFree) {
            return recetas.filter( it  => {
                if(it.isGlutenFree){
                    return it;
                }
            });
        }
        //si noy busqueda devuelve todas las recetas
        if (!searchText){return recetas};

       
        searchText = searchText.toLowerCase();
        let resultado = '';
        return recetas.filter( it  => {
            if(isGlutenFree){
                if(it.isGlutenFree){
                    resultado = it.nombre + it.cocinero + it.ingredientes;
                    resultado = resultado.toLowerCase();
                    return resultado.includes(searchText);
                }
            }else{
                resultado = it.nombre + it.cocinero + it.ingredientes;
                resultado = resultado.toLowerCase();
                return resultado.includes(searchText);
            }
            
         });
       }
}

