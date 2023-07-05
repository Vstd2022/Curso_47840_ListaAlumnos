import { Component } from '@angular/core';



@Component({
  selector: 'app-page-students',
  templateUrl: './page-students.component.html',
  styleUrls: ['./page-students.component.css']
})



export class PageStudentsComponent {
  
  public myFontSize = '20px';
  public myAlinea= 'text-align: right';

  public diahoy = new Date();
  
  constructor() {}
  public liststudents = [
    {nombre:'Luis Soto - ',nota: 50,},
    {nombre:'Alejandra Caro - ',nota:70,},
    {nombre:'Rosa Rojas - ',nota:60},
    {nombre:'Javier Torres - ',nota:40},
  ];

}
