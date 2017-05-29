import { Injectable } from '@angular/core';
import { IProduct } from './productos.interface';

@Injectable()
export class ProductosService {
  products : IProduct[];
  constructor() {

    this.products = [
      {id:1,title:'blu r1 hd 8gb',existence:1,priceBsf:0,priceDolar:60, description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officia, natus enim reprehenderit quisquam commodi placeat vero non quibusdam, est ab. A pariatur ratione, quos natus blanditiis libero dignissimos eum'},
      {id:2,title:'blu r1 hd 16gb',existence:1,priceBsf:0,priceDolar:60, description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officia, natus enim reprehenderit quisquam commodi placeat vero non quibusdam, est ab. A pariatur ratione, quos natus blanditiis libero dignissimos eum'}
    ];

   }
  find(id:number): IProduct{
    return this.products.find((logro)=> logro.id == id);
    /*
      return this.logros.find(function(logro){
        return logro.id == id;
      }):
     */
  }
  getProducts():IProduct[]{
    return this.products;
  }
}
