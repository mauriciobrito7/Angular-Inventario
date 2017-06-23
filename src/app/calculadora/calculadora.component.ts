import { Component, OnInit, HostBinding} from '@angular/core';
import { slide } from '../shared/animation';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
  animations:[slide]
})
export class CalculadoraComponent implements OnInit {
   precioDolares = 64;
   precioDolarToday = 5000 ;
   prime = 3;
   porcentaje = 30;
   envio = 20000;
  
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') dislay = 'block'; 
  constructor() { 
  }

  ngOnInit() {
  }



}
