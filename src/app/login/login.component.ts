import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: string = '';
  password: string = '';
  constructor( private service:UsuarioService, private router: Router ) { }

  ngOnInit() {
  }
  

  login(){

    this.service.postLogin({"user": this.user, "password": this.password})
    
    .subscribe(
      (response:any) => {
        console.log(response);
        this.router.navigate( ['home'] );


      },
      (error:any) => {
        console.log(error);
        alert('Datos incorrectos.')
      }
    )
  }

}
