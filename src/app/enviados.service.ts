import { Injectable } from '@angular/core';
import {BehaviorSubject} from  'rxjs' ;

@Injectable({
  providedIn: 'root'
})
export class EnviadosService {

  private messageSource = new BehaviorSubject ( 'mensaje predeterminado' ); 
  currentMessage = this .messageSource.asObservable ();

  constructor() { }
  
  changeMessage (message: string ) { this .messageSource.next (message)   }

}
