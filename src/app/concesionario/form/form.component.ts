import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CochesService } from '../../providers/coches.service';
import { Coche } from '../../model/coche';
/* ****************************************** */
/*   npm install --save-dev jquery            */
/* ****************************************** */
import * as $ from 'jquery';




@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  CochesService: any;
  form : FormGroup;

  constructor(private fb: FormBuilder, public cochesService : CochesService) { 

    console.log('FormComponent constructor');
    //this.crearFormulario();

  }

  ngOnInit() {
    console.log('FormComponent OnInit');
  }

  /*crearFormulario():void{
    console.log('FormComponent crearFormulario');
    this.form = this.fb.group({
       //FormControl(input) => ['value', [Validaciones] ]
       marca : ['', [Validators.required, Validators.minLength(2)] ],
       modelo: ['',Validators.required],
       puertas: ['',Validators.required],
       caballos: [''],
       consumo: [''],
       foto:['',Validators.required],
       version:['']
    });
  }

 /*sumitar():void{

     //Recogemos los datos del formulario
    // let coche = this.mapearFormularioCoche(this.form);

    //llamar al servicio
    //this.CochesService.crearCoche(coche);
  }
 /* mapearFormularioCoche(form : FormGroup): Coche {
   let coche = new Coche(form.value.marca,);

  }*/

}
