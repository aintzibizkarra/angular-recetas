import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const END_POINT ="http://localhost:3000";


@Injectable()
export class TodosService {

  constructor( public http: HttpClient ) {

    console.log('TodoService constructor');

  
   }

   getTodos(): Observable<any> {

    //Lanza la peticion y devuelve en un Observable
    let url = END_POINT + '/todos?userId=2';
    console.log(`TodoService getTodo ${url}`);
    return this.http.get(url);

   }

}
