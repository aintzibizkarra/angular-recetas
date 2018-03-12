import { Component, OnInit } from '@angular/core';
import { TodosService } from '../providers/todos.service';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos : Todo[];
  nuevaTarea : string;

  constructor(public todosService:TodosService) {
    console.log('TodosComponent constructor');

    this.todos = [];
   }

  ngOnInit() {
    console.log('TodosComponent OnInit');
    this.cargarTareas();

    this.todosService.getTodos().subscribe(
      resultado =>{
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);

      },
      error=>{
        console.warn('Peticion incorrecta %o', error);

      } 

    );//suscribe

  }//ngOnInit

  cargarTareas(){
    console.log('TodosComponent cargarTareas');
    this.todos = [];
    this.todosService.getTodos().subscribe(
      resultado => {
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error=>{
        console.warn('peticion incorrecta %o', error);
      }
    );//subscribe
  }

  /**
   * Mapea los datos en formato Json a TODOS que provienen del servicio REST
   * @param resultado : any
   */
  mapeo(result : any){

    let todo : Todo;

    result.forEach(el=> {
      todo = new Todo(el.title);
      todo.id = el.id;
      todo.userId = el.userId;
      todo.completed = el.completed;

      this.todos.push(todo);
      
    });

  }

  change(todo:Todo){
    console.log('TodosComponent change %o', todo );
    this.todos.forEach( (t, index) =>{
      if ( t.id === todo.id ){
        this.todos[index].completed = !todo.completed;
        return false; //break        
      }
    });
  }

  delete(todo:Todo){
    console.log('TodosComponent delete %o', todo );

    this.todosService.delete(todo.id).subscribe(
      result=>{
        this.cargarTareas();
      },
      error=>{
        alert('No se pudo elimiar la tarea');
      }
    );
    /*
    this.todos.forEach( (t, index) =>{
      if ( t.id === todo.id ){
        this.todos.splice(index,1);
        return false; //break        
      }
    });*/

  }
  
  new(){
    console.log('TodosComponent new ');
    let todo = new Todo(this.nuevaTarea);
    /*
    let todo = new Todo(this.nuevaTarea);
    this.todos.unshift(todo);
    this.nuevaTarea = "";
    */
    this.todosService.post(todo).subscribe(
      result=>{
        console.log('TodosComponent new %o', result);
        this.cargarTareas();
      },
      error=>{
        alert('No se pudo crear una nueva tarea');
        console.error(error);
      }
    );
  }

}
