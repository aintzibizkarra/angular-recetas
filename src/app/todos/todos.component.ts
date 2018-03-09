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

  modificarCheck(){
    console.log("Modificar el check");
  }

  eliminarCheck(){
    console.log("Eliminar la tarea");
  }

  anadirCheck(){
    console.log("Anñadir nueva tarea");
  }


}
