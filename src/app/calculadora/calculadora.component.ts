import { Component, OnInit, HostBinding} from '@angular/core';
import { slide } from '../shared/animation';
import { IPrices } from './../services/prices.interface';
import { PricesService } from './../services/prices.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
  animations:[slide]
})
export class CalculadoraComponent implements OnInit {
   prices: IPrices;
   precioDolares = 60;
   precioDolarToday;
   prime;
   porcentaje;
   envio;
   option = false;
   monto = 0;
   earn_for_price = 0;
  
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') dislay = 'block'; 
  constructor(pricesService : PricesService) {
    this.prices = pricesService.getPrices();
    this.precioDolarToday = this.prices.precioDolarToday;
    this.prime = this.prices.prime;
    this.porcentaje = this.prices.porcentaje;
    this.envio = this.prices.envio;
  }
  setOption(){
    if(this.option)
      this.option = false;
    else
      this.option = true;
  }
  ngOnInit() {
  }
}
