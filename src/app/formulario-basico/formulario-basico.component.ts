import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-basico',
  templateUrl: './formulario-basico.component.html',
  styleUrls: ['./formulario-basico.component.scss']
})
export class FormularioBasicoComponent implements OnInit {

    //Atributo FormGroup para usar en el HTML => <form novalidate [FormGroup]="formulario">
  formulario: FormGroup;
  fruta: string;

  constructor(private fb: FormBuilder) { 
    //Crear formulario
    this.fruta ="banana";
    
    this.formulario = this.fb.group({
      //Nombre => control = input
      nombre:['',   //value
                [  //validaciones
                  Validators.required, 
                  Validators.minLength(3)] 
              ]

    });

  }

  ngOnInit() {
  }


    //html => <form (ngSubmit)="enviar($event)">
  enviar(){
    console.log("Enviar formulario nombre %s", this.formulario.controls.nombre.value);
  }

}
