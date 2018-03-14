import { Servicio } from "./servicios";

export class Casa{

    //Atributos
   
    nombre: string;
    foto: string;
    precio: number;
    alquiler:boolean;
    direccion:string;
    habitaciones: number;
    servicios: Servicio[];

    constructor(){
        console.log('Casa constructor');
       
        this.nombre= '';
        this.direccion = '';
        this.foto ='assets/img/casa_default.jpg';
        this.habitaciones=0;
        this.precio= 0;
        this.alquiler = true;
        this.servicios =[]; 



    }


}