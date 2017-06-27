import { Component, OnInit, HostBinding } from '@angular/core';
import { ProductosService } from './../../services/productos.service';
import { IProduct } from './../../services/productos.interface';


/* 
 ActivatedRoute es una clase que tambien tiene que inyectarse
*/
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {
  product: IProduct;

  constructor(private productsService: ProductosService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params)=>{
      console.log(params);
      let id = params["id"];
      this.product = this.productsService.getProduct(parseInt(id))
    })
  }

}
