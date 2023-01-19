import { Component, OnInit } from '@angular/core';
import {TermekService} from "../../shared/services/termek.service";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-termekek',
  templateUrl: './termekek.component.html',
  styleUrls: ['./termekek.component.scss']
})
export class TermekekComponent implements OnInit {

  products: any[] | undefined;
  products2: any[] | undefined;
  selectedProductId: number | undefined;
  showProducts: boolean | undefined;

  constructor(private termekService: TermekService,private productService: ProductService) { }

  ngOnInit() {
    this.termekService.getProductsByCategory("Számítógép alkatrész").subscribe(products => {
      this.products = products;
    });

    this.termekService.getProductsByCategory2("Számítógép Periféria").subscribe(products => {
      this.products2 = products;
    });

    this.selectedProductId = this.productService.getSelectedProductId();
    this.showProducts = this.productService.getShowProducts();
  }

}
