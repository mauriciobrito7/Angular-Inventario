import { Injectable } from '@angular/core';
import { IPrices } from './prices.interface';

@Injectable()
export class PricesService {
 private prices : IPrices;
  constructor() {
    this.prices = {
      precioDolarToday:8200, prime:3, envio :32000, porcentaje:30
    } 
   }

  getPrices():IPrices{
    return this.prices;
  }
  setPrecioDolarToday(precio:number){
    this.prices.precioDolarToday = precio;
  }
  setPrime(precio:number){
    this.prices.prime = precio;
  }
  setEnvio(precio:number){
    this.prices.envio = precio;
  }
  setPorcentaje(precio:number){
    this.prices.porcentaje = precio;
  }
}
