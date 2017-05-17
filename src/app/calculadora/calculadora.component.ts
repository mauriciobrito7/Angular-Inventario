import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {
   precioDolares = 64;
   precioDolarToday = 5000 ;
   prime = 3;
   porcentaje = 30;
   envio = 20000;
  constructor() { 
  }

  ngOnInit() {
  }



}
