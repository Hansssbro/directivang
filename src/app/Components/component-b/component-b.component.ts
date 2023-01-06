import { Component, OnInit } from '@angular/core';
import { Route,Router } from '@angular/router';
@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.css']
})
export class ComponentBComponent implements OnInit {

  constructor(private router: Router) { }
  
  //resultado:any
  //mensaje:any
  nombre: any
  apellido:any
  correo:any
  numero:any
  ngOnInit(): void {
   // this.recuperar()
    this.factura()
  }

  factura (){
this.nombre = localStorage.getItem('nombre')
this.apellido = localStorage.getItem('apellido')
this.correo = localStorage.getItem('correo')
this.numero = localStorage.getItem('numero')
  }/*
  recuperar(){
    this.resultado = localStorage.getItem('valor_total')
    this.mensaje = localStorage.getItem('mensaje')

  }*/
  navegacion2 (){
    this.router.navigate(['']);
  }
}

