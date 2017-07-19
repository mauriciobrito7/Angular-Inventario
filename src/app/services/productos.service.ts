import { Injectable } from '@angular/core';
import { IProduct } from './productos.interface';

@Injectable()
export class ProductosService {
  private products : IProduct[];
  constructor() {

    this.products = [
      {id:1,title:'Blu R1 HD 8gb',existence:1,priceBsf:0,priceDolar:50, description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officia, natus enim reprehenderit quisquam commodi placeat vero non quibusdam, est ab. A pariatur ratione, quos natus blanditiis libero dignissimos eum'},
      {id:2,title:'Blu R1 HD 16gb',existence:1,priceBsf:0,priceDolar:60, description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officia, natus enim reprehenderit quisquam commodi placeat vero non quibusdam, est ab. A pariatur ratione, quos natus blanditiis libero dignissimos eum'},
      {id:3,title:'Samsung Express 3',existence:1,priceBsf:0,priceDolar:45, description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officia, natus enim reprehenderit quisquam commodi placeat vero non quibusdam, est ab. A pariatur ratione, quos natus blanditiis libero dignissimos eum'},
      {id:4,title:'Alcatel A30',existence:1,priceBsf:0,priceDolar:60, description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium officia, natus enim reprehenderit quisquam commodi placeat vero non quibusdam, est ab. A pariatur ratione, quos natus blanditiis libero dignissimos eum'}
    ];

   }
  filterForId(id:number): IProduct[]{
    return this.products.filter((product)=> product.id == id);
    /*
      return this.products.find(function(logro){
        return product.id == id;
      }):
     */
  }
  getProduct(id:number): IProduct{
    return this.products.find((product)=> product.id == id);
    /*
      return this.products.find(function(logro){
        return product.id == id;
      }):
     */
  }
  getProducts():IProduct[]{
    return this.products;
  }
}
