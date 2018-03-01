import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  //Definimos sus atributos

  nombre:string;
  imagen:string;
  descripcion:string;
  likes:number;
  isGlutenFree: boolean;
  cocinero: string;
  ingredientes:string[];


  show: boolean;
  glyphicon:string;


  constructor() { 
    console.log('RecetaComponent constructor');
    this.nombre = 'Bocata de Kalamares';
    this.descripcion = 'El bocadillo de calamares es una especialidad culinaria muy frecuente en España consistente en, o bien calamares rebozados en harina y fritos en aceite que suele ser de oliva.'
    this.imagen = 'http://cd00.epimg.net/cincodias/imagenes/2016/10/26/empresas/1477481793_763924_1477496457_noticia_normal.jpg';
    this.likes = 10;
    this.isGlutenFree = false;
    this.cocinero = "Karlos Arguiñano";
    this.ingredientes =['Kalamares','Huevo','Limón', 'Salsa Ali-Oli', 'Pan','Harina']
    
    this.show=false;
    this.glyphicon ="glyphicon-chevron-down";

   
  }

  ngOnInit() {

    console.log('RecetaComponent ngOnInit');
  }


  sumarLike(){
    console.log('Click en sumarLike');
    this.likes++;
    
  }
  showIngredientes(){
    console.log('Click showIngredientes');
    this.show= !this.show;
    this.glyphicon=(this.show)?'glyphicon-chevron-up':'glyphicon-chevron-down'; //si es true me escribe lo que esa antes de los : sino lo siguienes (operador ternario)
  }
}
