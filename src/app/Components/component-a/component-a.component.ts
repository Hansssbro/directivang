import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {


  constructor(private router: Router) { }
  //suma:any
  //numero:any
  //sueldos=[1700, 1600, 1900];
  nombre: any
  apellido: any
  contra: any
  correo: any
  num:any
  

  ngOnInit(): void {
    //this.numero=3;
    //this.suma=0;
    //this.almacenar2()
    //this.almacenar()--
    localStorage.clear()
    //this.navegacion()
  }

  almacenar(){
    localStorage.setItem('nombre',this.nombre)
    localStorage.setItem('apellido',this.apellido)
    localStorage.setItem('contra',this.contra)
    localStorage.setItem('correo',this.correo)
    localStorage.setItem('numero',this.num)
  }
 /*almacenar2 (){
    localStorage.setItem('valor_total',this.numero)
    localStorage.setItem('mensaje',"oa")
  }*/
  navegacion (){
    this.almacenar();
    this.router.navigate(['b']);
  }
}
