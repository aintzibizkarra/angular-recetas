import { Injectable } from '@angular/core';
import { Casa } from '../model/casa';
import { Servicio } from '../model/servicios';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from '../global';

const END_POINT ="http://localhost:3000";

@Injectable()
export class CasaService {
  

  constructor(public http: HttpClient) { 
    console.log('CasaService constructor');
  }

  getAll():Observable<any>{
    let url = END_POINT +'/casas';
    console.log(`CasaService getAll ${url}`);    
    return this.http.get(url);
  }
}
