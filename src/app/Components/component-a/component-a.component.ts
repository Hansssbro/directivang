import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {


  constructor(private router: Router) { }
  suma:any
  numero:any
  sueldos=[1700, 1600, 1900];
  ngOnInit(): void {
    this.numero=3;
    this.suma=0;
    this.almacenar()
    localStorage.clear()
  }
 almacenar (){
    localStorage.setItem('valor_total',this.numero)
    localStorage.setItem('mensaje',"oa")
  }
  navegacion (){
    this.router.navigate(['b']);
  }
}
