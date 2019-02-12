import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{post} from './postBE';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient:HttpClient) {
    console.log('service is working');
   }

   postLogin(body){
      return this.httpClient.post('https://prueba-seleccion-granada.herokuapp.com/login', body);
   }

   getdata(){
    return this.httpClient.get<post []>('https://prueba-seleccion-granada.herokuapp.com/inbox');
   }

}
