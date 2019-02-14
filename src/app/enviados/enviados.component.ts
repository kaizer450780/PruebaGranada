import { Component, OnInit } from '@angular/core';
import { NuevoComponent } from '../nuevo/nuevo.component';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-enviados',
  templateUrl: './enviados.component.html',
  styleUrls: ['./enviados.component.css']
})
export class EnviadosComponent implements OnInit {

  posts = [];

  constructor(private service: UsuarioService) { }

  ngOnInit() {
    this.getEnviados();
  }


  getEnviados() {
    this.service.getEnviados().subscribe(
      (response: any) => {
        this.posts = response.data;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }
}
