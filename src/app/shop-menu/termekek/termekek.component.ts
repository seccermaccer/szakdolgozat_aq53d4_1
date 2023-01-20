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
  products3: any[] | undefined;
  products4: any[] | undefined;
  products5: any[] | undefined;
  products6: any[] | undefined;
  products7: any[] | undefined;
  products8: any[] | undefined;
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

    this.termekService.getProductsByCategory3("Szórakoztató Elektronika").subscribe(products => {
      this.products3 = products;
    });

    this.termekService.getProductsByCategory4("TV,monitor").subscribe(products => {
      this.products4 = products;
    });

    this.termekService.getProductsByCategory5("Mobil,tablet,kamera").subscribe(products => {
      this.products5 = products;
    });

    this.termekService.getProductsByCategory6("Háztartási gép,eszköz").subscribe(products => {
      this.products6 = products;
    });

    this.termekService.getProductsByCategory7("Okosotthon").subscribe(products => {
      this.products7 = products;
    });

    this.termekService.getProductsByCategory8("Számítógép tartozékok").subscribe(products => {
      this.products8 = products;
    });

    this.selectedProductId = this.productService.getSelectedProductId();
    this.showProducts = this.productService.getShowProducts();
  }

}
