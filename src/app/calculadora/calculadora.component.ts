import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
  private precioDolares = 64;
  private precioDolarToday = 5000 ;
  private prime = 3;
  private porcentaje = 30;
  private envio = 20000;
  constructor() { 
  }

  ngOnInit() {
  }



}
