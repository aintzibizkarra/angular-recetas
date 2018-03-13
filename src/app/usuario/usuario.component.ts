import { Component, OnInit } from '@angular/core';
import { Usuario, Sexo } from '../model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  usuario : Usuario;

  constructor() {
    console.log('UsuarioComponent constructor');
    this.usuario = new Usuario('Homer');
    this.usuario.apellido = 'Simpson';
    this.usuario.avatar = 'http://thinkandaction.com/wp-content/uploads/2017/05/what-homer-simpson-taught-us-about-doughnuts-1030x579.jpeg';
    this.usuario.email = 'homer@homer.com';
    this.usuario.sexo = Sexo.MASCULINO;

  }

  ngOnInit() {
    console.log('UsuarioComponent ngOnInit');
  }

}
