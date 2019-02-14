import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

   getEnviados(){
    return this.httpClient.get<post []>('https://prueba-seleccion-granada.herokuapp.com/sent');
   }

   postMensaje(body){
    return this.httpClient.post('https://prueba-seleccion-granada.herokuapp.com/send',body);
   }

   deleteMensaje(body){
    return this.httpClient.request('delete','https://prueba-seleccion-granada.herokuapp.com/inbox/delete', {body});
   }

}
