import { PricesService } from '../../services/prices.service';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../../services/productos.service';
import { IProduct } from './../../services/productos.interface';
import { IPrices } from './../../services/prices.interface';
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {
  products : IProduct[];
  prices : IPrices;
  id;
  constructor(private productsService: ProductosService, private pricesService: PricesService) {
    this.getProducts();
    this.getPrices();
   }

  ngOnInit() {
  }
  getProducts(){
    this.products = this.productsService.getProducts();
  }
  getPrices(){
    this.prices = this.pricesService.getPrices();
  }
  validateFilter(){
    if(this.id == 1){
      this.getProducts();
    }
    console.log("hola");
  }
  filterItem(){
    this.products = this.productsService.filterForId(this.id);
    console.log(this.id);
  }
}
