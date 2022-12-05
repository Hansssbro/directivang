import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.css']
})
export class ComponentAComponent implements OnInit {

  constructor() { }

  numero:any=0;
  sueldos=[1700, 1600, 1900];
  ngOnInit(): void {
   
  }
 

}
