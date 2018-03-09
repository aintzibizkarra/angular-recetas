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
  glyphicon : string;

  constructor(public todosService:TodosService) {
    console.log('TodosComponent constructor');

    this.todos = [];
   }

  ngOnInit() {
    console.log('TodosComponent OnInit');

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

  /**
   * Tarea que pone a false una tarea que no esta terminada y a true cuando esta terminada
   */

  eliminarTarea(todo:Todo){
    console.log("Eliminar tarea");
    this.todos.forEach((t,index)=>{if(t.id ===todo.id){
      this.todos[index].title="";
      //this.todosService.
      return false; //break;
    }});
  }


  /** 
   * Añade una nueva tarea a la lista
  */
 anadirNuevaTarea(todo: Todo){
    console.log("Añadir nueva tarea");
    let nTarea : Todo [];
    nTarea = new Todo [todo.title];
    this.todos.unshift;
  }

  modificarTarea(todo : Todo){
    console.log("Modificar el check");
    this.todos.forEach((t,index)=>{
        if(t.id ===todo.id){
            this.todos[index].completed=!todo.completed;
            return false; //break;
        }
      });

  }


}
