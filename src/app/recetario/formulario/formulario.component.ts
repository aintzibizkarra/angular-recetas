import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';

/* ****************************************** */
/*   npm install --save-dev jquery            */
/* ****************************************** */
import * as $ from 'jquery';

import { Receta } from '../../model/receta';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {


  formulario : FormGroup;
  
  constructor( private fb: FormBuilder, public recetasService : RecetasService ) {
    console.log('FormularioComponent constructor');
    this.crearFormulario();
  }

  ngOnInit() {
    console.log('FormularioComponent ngOnInit');
  }

  crearFormulario():void{
    console.log('FormularioComponent crearFormulario');
    this.formulario = this.fb.group({
      //FormControl(input) => ['value', [Validaciones] ]
      nombre : ['', [Validators.required, Validators.minLength(2)] ],
      cocinero : ['',[Validators.minLength(5)]],
      glutenSi:[],
      descripcion:['',[Validators.required, Validators.minLength(100)]],
     imagen: ['']
    });

  }

  sumitar():void{
    console.log('FormularioComponent onSubmit');

    //recoger datos del formulario
    let nombre = this.formulario.value.nombre;
    let cocinero = this.formulario.value.cocinero;
    let descripcion= this.formulario.value.descripcion;
    let imagen = this.formulario.value.imagen;


    let receta = new Receta(nombre);
    receta.cocinero = cocinero;
    receta.imagen = imagen;


    //llamar Servicio
    this.recetasService.crear( receta );

    //TODO cerrar modal    
    //$("#modalReceta").modal('hide');
    $("#btn-close").click();


  }

}
