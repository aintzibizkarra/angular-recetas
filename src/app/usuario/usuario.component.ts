import { Component, OnInit } from '@angular/core';
import {Usuario} from '../model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  avatar:string;
  usuario: Usuario;
  

  constructor() { 
    console.log('UsuarioComponent constructor');
    //Inicializar una clase receta

    this.usuario = new Usuario('Homer');
   
    this.avatar= 'https://consequenceofsound.files.wordpress.com/2017/04/homer-simpson-feature1.png?w=807';
     this.usuario.apellidos= 'Simpson';
    this.usuario.email= 'homer.simpson@springfield.es'
  }

  ngOnInit() {
    console.log('UsuarioComponent ngOnInit');
  }

}
