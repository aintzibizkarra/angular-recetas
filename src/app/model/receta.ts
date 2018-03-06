 import { cleanSession } from "selenium-webdriver/safari";

/* Una clase para encapsular los atributos de una receta. */ 

export class Receta{

    //Atributos
    nombre:string;
    imagen:string;
    descripcion:string;
    likes:number;
    isGlutenFree: boolean;
    cocinero: string;
    ingredientes:string[];
    
    //Solo es posible un constructor.
    constructor(nombre:string, 
                cocinero:string ='Anonimo',//valor por defecto para undefined o no viene el parametro
                imagen:string = './assets/img/receta_Default1.jpg',
                descripcion = '',
                likes
        ){
        console.log('Receta constructor.');

        this.nombre = nombre;
        this.imagen = imagen;
        this.likes = likes;
        this.cocinero = cocinero;
        this.descripcion = descripcion;
        this.isGlutenFree = false;
        this.ingredientes = [];

    }
    addingrediente (ingrediente:string){
        this.ingredientes.push(ingrediente);
    }

   
}