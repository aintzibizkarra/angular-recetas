export class Coche{
    id: number;
    marca: string;
    modelo: string;
    version : string;
    foto: string;

    constructor(marca:string, 
                modelo:string, 
                version?:string /*? es opcional, puede venir o no*/
    ){
        this.id = -1;
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        this.foto = 'assets/img/mercedes-1142259_640.png';
    }
}