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
  constructor(productsService: ProductosService, pricesService: PricesService) {
    this.products = productsService.getProducts();
    this.prices = pricesService.getPrices();
   }

  ngOnInit() {
  }

}
