import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts = [];

  constructor(private service:UsuarioService, private router: Router) { 

    
    this.service.getdata().subscribe(data => {
        console.log(data);
    });
  }

  ngOnInit() {
  }

}
