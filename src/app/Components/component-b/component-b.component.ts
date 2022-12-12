import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {

  constructor() { }
  resultado:any
  mensaje:any
  ngOnInit(): void {
    this.recuperar()
  }
  recuperar(){
    this.resultado = localStorage.getItem('valor_total')
    this.mensaje = localStorage.getItem('mensaje')
  }
}
