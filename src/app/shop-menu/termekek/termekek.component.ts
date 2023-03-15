import { Component, OnInit } from '@angular/core';
import {TermekService} from "../../shared/services/termek.service";
import {ProductService} from "../../shared/services/product.service";
import {KosarService} from "../../shared/services/kosar.service";
import {RatingService} from "../../shared/services/rating.service";

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
  products9: any[] | undefined;
  products10: any[] | undefined;
  products11: any[] | undefined;
  products12: any[] | undefined;
  products13: any[] | undefined;
  products14: any[] | undefined;
  products15: any[] | undefined;
  products16: any[] | undefined;
  products17: any[] | undefined;
  products18: any[] | undefined;
  products19: any[] | undefined;
  products20: any[] | undefined;
  products21: any[] | undefined;
  products22: any[] | undefined;
  products23: any[] | undefined;
  products24: any[] | undefined;
  products26: any[] | undefined;
  products27: any[] | undefined;
  products28: any[] | undefined;
  selectedProductId: number | undefined;
  showProducts: boolean | undefined;
  quantity: any = 0;
  cart: { product: any, quantity: number }[] = [];
  quantity1: any = 0;
  quantity2: any = 0;
  cartItems: any[] = [];
  quantity3: any = 0;
  quantity4: any = 0;
  quantity5: any = 0;
  quantity6: any = 0;
  quantity7: any = 0;
  quantity8: any = 0;
  quantity9: any = 0;
  quantity10: any = 0;
  quantity11: any = 0;
  quantity12: any = 0;
  quantity13: any = 0;
  quantity14: any = 0;
  quantity15: any = 0;
  quantity16: any = 0;
  quantity17: any = 0;
  quantity18: any = 0;
  quantity19: any = 0;
  quantity22: any = 0;
  quantity23: any = 0;
  quantity24: any = 0;
  quantity25: any = 0;
  quantity26: any = 0;
  quantity27: any = 0;
  quantity28: any = 0;
  rate: number = 0;
  rate2: number = 0;
  rate3: number = 0;
  rate4: number = 0;
  rate5: number = 0;
  rate6: number = 0;
  rate7: number = 0;
  rate8: number = 0;
  rate11: number = 0;
  rate9: number = 0;
  rate10: number = 0;

  constructor(private termekService: TermekService,private productService: ProductService,private cartService: KosarService,private rating: RatingService) { }

  ngOnInit() {
    this.termekService.getProductsByCategory("Számítógép alkatrész").subscribe(products => {
      this.products9 = products;
    });

    this.termekService.getProductsByCategory("Számítógép alkatrész2").subscribe(products => {
      this.products10 = products;
    });

    this.termekService.getProductsByCategory("Számítógép alkatrész3").subscribe(products => {
      this.products11 = products;
    });

    this.termekService.getProductsByCategory("Számítógép alkatrész4").subscribe(products => {
      this.products12 = products;
    });

    this.termekService.getProductsByCategory("Számítógép alkatrész1").subscribe(products => {
      this.products = products;
    });

    this.termekService.getProductsByCategory2("Számítógép Periféria").subscribe(products => {
      this.products2 = products;
    });

    this.termekService.getProductsByCategory2("Számítógép Periféria1").subscribe(products => {
      this.products26 = products;
    });

    this.termekService.getProductsByCategory2("Számítógép Periféria2").subscribe(products => {
      this.products27 = products;
    });

    this.termekService.getProductsByCategory2("Számítógép Periféria3").subscribe(products => {
      this.products28 = products;
    });

    this.termekService.getProductsByCategory3("Szórakoztató Elektronika").subscribe(products => {
      this.products3 = products;
    });

    this.termekService.getProductsByCategory3("Szórakoztató Elektronika1").subscribe(products => {
      this.products23 = products;
    });

    this.termekService.getProductsByCategory3("Szórakoztató Elektronika2").subscribe(products => {
      this.products24 = products;
    });

    this.termekService.getProductsByCategory4("TV,monitor").subscribe(products => {
      this.products4 = products;
    });

    this.termekService.getProductsByCategory4("TV,monitor1").subscribe(products => {
      this.products21 = products;
    });

    this.termekService.getProductsByCategory4("TV,monitor2").subscribe(products => {
      this.products22 = products;
    });

    this.termekService.getProductsByCategory5("Mobil,tablet,kamera").subscribe(products => {
      this.products5 = products;
    });

    this.termekService.getProductsByCategory5("Mobil,tablet,kamera1").subscribe(products => {
      this.products19 = products;
    });

    this.termekService.getProductsByCategory5("Mobil,tablet,kamera2").subscribe(products => {
      this.products20 = products;
    });

    this.termekService.getProductsByCategory6("Háztartási gép,eszköz").subscribe(products => {
      this.products6 = products;
    });

    this.termekService.getProductsByCategory6("Háztartási gép,eszköz1").subscribe(products => {
      this.products17 = products;
    });

    this.termekService.getProductsByCategory6("Háztartási gép,eszköz2").subscribe(products => {
      this.products18 = products;
    });

    this.termekService.getProductsByCategory7("Okosotthon").subscribe(products => {
      this.products7 = products;
    });

    this.termekService.getProductsByCategory7("Okosotthon1").subscribe(products => {
      this.products15 = products;
    });

    this.termekService.getProductsByCategory7("Okosotthon2").subscribe(products => {
      this.products16 = products;
    });

    this.termekService.getProductsByCategory8("Számítógép tartozékok").subscribe(products => {
      this.products8 = products;
    });

    this.termekService.getProductsByCategory8("Számítógép tartozékok1").subscribe(products => {
      this.products13 = products;
    });

    this.termekService.getProductsByCategory8("Számítógép tartozékok2").subscribe(products => {
      this.products14 = products;
    });

    this.selectedProductId = this.productService.getSelectedProductId();
    this.showProducts = this.productService.getShowProducts();

    this.rating.getAverageRating('ugfsugzfdshuiogdfshis').subscribe(rater =>
    {
      console.log(rater)
      this.rate = rater;
    },error => {
      console.error(error)
    })

    this.rating.getAverageRating('asdasdasd').subscribe(rater =>
    {
      console.log(rater)
      this.rate2 = rater;
    },error => {
      console.error(error)
    })

  }

  addToCart(product: any, quantity: number) {
    this.cartService.addToCart(product, quantity);
    console.log("működik");
  }



}
