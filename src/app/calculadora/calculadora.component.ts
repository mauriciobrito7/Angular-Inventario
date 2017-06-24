import { Component, OnInit, HostBinding} from '@angular/core';
import { slide } from '../shared/animation';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
  animations:[slide]
})
export class CalculadoraComponent implements OnInit {
   precioDolares = 60;
   precioDolarToday = 8300 ;
   prime = 3;
   porcentaje = 35;
   envio = 21000;
  
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') dislay = 'block'; 
  constructor() { 
  }

  ngOnInit() {
  }



}
