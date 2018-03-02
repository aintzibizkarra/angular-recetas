import { cleanSession } from "selenium-webdriver/safari";

/* Una clase para encapsular los atributos de una receta. */ 

export class Usuario {
    //Atributos
    nombre:string;
    avatar:string;
    apellidos:string;
    id:number;
   // sexo:Sexo;
    email:string;
    
    //Solo es posible un constructor.
    constructor(nombre:string ='Anonimo'){

        console.log('Usuario constructor.');

        this.id = -1;
        this.nombre = nombre;
        this.avatar = '';
        this.apellidos = '';
        //this.sexo = Sexo.Otros;
        

    }

   /* export enum Sexo{
        MASCULINO = 'Masculino'
        FEMENINO = 'Femenino'
        OTROS = 'Otros'
    }*/
    

}