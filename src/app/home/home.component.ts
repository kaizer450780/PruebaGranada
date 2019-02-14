import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { EliminadosService } from '../eliminados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts = [];
  filter: string
  mensaje: number = 0;
  disable = true;
  constructor(private service: UsuarioService, private router: Router, public eliminar: EliminadosService) {

  }

  busqueda() {

    if (this.filter === '' || this.filter === undefined) {
      this.getData()
    } else {
      this.posts = this.posts.filter(msm => {
        if (msm.subject.includes(this.filter)) return msm
      })
    }
  }

  delete() {
    this.service.deleteMensaje({ 'id': this.eliminar.ids }).subscribe(
      (response: any) => {
        this.eliminar.eliminados = response.data;
        this.mensaje = 1;
        for (let i = 0; i < this.eliminar.eliminados.length; i++) {
          for (let p = 0; p < this.posts.length; p++) {
            if (this.posts[p].id == this.eliminar.eliminados[i].id) {
              this.posts.splice(p, 1);
            }

          }
        }
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  checkValue(id) {
    if (this.eliminar.ids.indexOf(id) != -1) {
      this.eliminar.ids.splice(this.eliminar.ids.indexOf(id), 1);
    } else {
      this.eliminar.ids.push(id);
    }
    if (this.eliminar.ids.length == 0) {
      this.disable = true;
    } else {
      this.disable = false;
    }
  }

  getData() {
    this.service.getdata().subscribe(data => {
      data['data'].sort((a) => {
        if (a.favorite) {
          return -1
        } else {
          return 0
        }
      })
      this.posts = data['data']
    })
  }

  ngOnInit() {
    this.getData()
  }

}