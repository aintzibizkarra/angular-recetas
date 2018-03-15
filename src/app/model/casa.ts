import { Servicio } from "./servicios";

export class Casa{

    //Atributos
    id: number;
    nombre: string;
    foto: string;
    precio: number;
    alquiler:boolean;
    direccion:string;
    habitaciones: number;
    servicios: Servicio[];

    constructor(){
        console.log('Casa constructor');
        this.id =-1;
        this.nombre= '';
        this.direccion = '';
        this.foto ='assets/img/casa_default1.jpg';
        this.habitaciones=0;
        this.precio= 0;
        this.alquiler = false;
        this.servicios =[]; 
    }
}