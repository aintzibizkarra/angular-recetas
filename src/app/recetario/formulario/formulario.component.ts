import { Component, OnInit } from '@angular/core';
import { RecetasService } from '../../providers/recetas.service';


/* ****************************************** */
/*   npm install --save-dev jquery            */
/* ****************************************** */
import * as $ from 'jquery';

import { Receta } from '../../model/receta';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {


  formulario : FormGroup;
  ingredientes : FormArray;
  mensaje : string;
  numIngredientes: number;
  
  constructor( private fb: FormBuilder, public recetasService : RecetasService ) {
    console.log('FormularioComponent constructor');
    this.crearFormulario();
    this.ingredientes = this.formulario.get('ingredientes') as FormArray;
    this.numIngredientes = this.ingredientes.length;
  }

  ngOnInit() {
    console.log('FormularioComponent ngOnInit');
  }

  crearFormulario():void{
    console.log('FormularioComponent crearFormulario');
    this.formulario = this.fb.group({

      //FormControl(input) => ['value', [Validaciones] ]
      nombre : ['', [Validators.required, Validators.minLength(2)] ],
      cocinero : ['',[ Validators.minLength(5)]],
      gluten:["true", Validators.required],
      descripcion:['',[Validators.required, Validators.minLength(100)]],
      imagen: ['assets/img/receta_Default.jpg', Validators.required],
      ingredientes : this.fb.array([ this.createIngredienteFormGroup()],Validators.required)

    });

  }

  /** 
   * Creamos un FormGroup para los Ingredientes
   * */  
  createIngredienteFormGroup(): FormGroup {
    console.log('FormularioComponent createIngredienteFormGroup');
    return this.fb.group({
      nombre: ['', [Validators.required]]
    });
  }

    /** 
   * Evento para crear un nuevo Ingrediente
  */
 clickOtroIngrediente(){
  console.log('FormularioComponent clickOtroIngrediente');    
  this.ingredientes.push( this.createIngredienteFormGroup() );
}

clickEliminarIngrediente( index ){
  console.log('FormularioComponent clickEliminarIngrediente'); 
  
  if(this.ingredientes.length>1){
    this.ingredientes.removeAt(index);

  } 
  
  
}


  sumitar():void{
    console.log('FormularioComponent onSubmit');
    
    //Recogemos los datos del formulario
    let receta = this.mapearFormularioReceta(this.formulario)
    
    //llamar Servicio
    this.recetasService.crear( receta );

    
   

    //Limpiar formulario y volver a inicializar los campos.
    this.formulario.reset({
      gluten: "true",
      imagen :"assets/img/receta_Default.jpg"
    });

     //Poner solo 1 ingrediente
     this.ingredientes.controls.splice(1);
     
    //TODO cerrar modal    
    //$("#modalReceta").modal('hide');
    $("#btn-close").click();
  }

  estilosInput(control : FormControl): string{
    const CLASS_ERROR = "form-group has-error";
    const CLASS_SUCCESS = "form-group has-success";

    //si cambia el estado
    if(control.dirty){
      return(control.valid)?CLASS_SUCCESS: CLASS_ERROR;

    }
    else{
      return "form-group";
    }

    //return "form-group has-success";
  }
/**
   * Mapear Los datos del Formulario a una Receta
   * @param form : FormGroup
   */
  mapearFormularioReceta( form : FormGroup ):Receta{
      
    let receta = new Receta(form.value.nombre);
    receta.cocinero = form.value.cocinero;
    receta.isGlutenFree = ( form.value.gluten === "true" )?false:true;
    receta.imagen = form.value.imagen;
    receta.descripcion = form.value.descripcion;

    //recuperar los ingredientes
    form.value.ingredientes.map(element => {
      receta.addIngrediente( element.nombre );
    });

    return receta;
 }

}
