import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  form: FormGroup;
  mensaje: number = 0;

  constructor(private usuario: UsuarioService) {
    this.createForm();
   }



  enviar(){  
    if(this.form.status == 'INVALID'){
      this.mensaje = 1;
    }else{
      this.mensaje = 0;
      this.usuario.postMensaje({'subject': this.form.value.subject , 'receiver': this.form.value.receiver, 'description': this.form.value.description }).subscribe(
        (Response: any) => {
          console.log(Response);
          this.mensaje = 2;
        },
        (error: any) => {
          console.log(error);
          this.mensaje = 1;
        }
      )

    }
    
  }

  createForm(){
    this.form = new FormGroup({
      subject: new FormControl('', Validators.required),
      receiver: new FormControl('', [Validators.required, Validators.email]),
      description: new FormControl('', [Validators.required, Validators.maxLength(50)])
    })
  }



  ngOnInit() {
  }

}
