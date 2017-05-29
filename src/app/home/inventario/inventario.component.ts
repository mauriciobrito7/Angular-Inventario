import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../../services/productos.service';
import { IProduct } from './../../services/productos.interface';
@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss']
})
export class InventarioComponent implements OnInit {
  products : IProduct[];
  constructor(productsService: ProductosService) {
    this.products = productsService.getProducts();
   }

  ngOnInit() {
  }

}
