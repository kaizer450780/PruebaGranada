import { Component, OnInit } from '@angular/core';
import { EliminadosService } from '../eliminados.service';

@Component({
  selector: 'app-eliminados',
  templateUrl: './eliminados.component.html',
  styleUrls: ['./eliminados.component.css']
})
export class EliminadosComponent implements OnInit {

  constructor(public eliminar:EliminadosService) { }

  ngOnInit() {
  }

}
