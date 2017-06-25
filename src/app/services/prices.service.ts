import { Injectable } from '@angular/core';
import { IPrices } from './prices.interface';

@Injectable()
export class PricesService {
prices : IPrices;
  constructor() {
    this.prices = {
      precioDolarToday:8100, prime:3, envio :21000
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
}
