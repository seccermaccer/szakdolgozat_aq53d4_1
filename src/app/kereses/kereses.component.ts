import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../shared/services/search.service";

@Component({
  selector: 'app-kereses',
  templateUrl: './kereses.component.html',
  styleUrls: ['./kereses.component.scss']
})
export class KeresesComponent implements OnInit {

  searchText = '';
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
  products25: any[] | undefined;
  products26: any[] | undefined;
  products27: any[] | undefined;

  constructor(private route: ActivatedRoute,private keresesS: SearchService) {
    this.route.queryParams.subscribe(params => {
      const searchText = params['q'];
      this.keresesS.searchProducts(searchText)
        .subscribe((data) => {
          this.products = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts2(searchText)
        .subscribe((data) => {
          this.products2 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts3(searchText)
        .subscribe((data) => {
          this.products3 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts4(searchText)
        .subscribe((data) => {
          this.products4 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts5(searchText)
        .subscribe((data) => {
          this.products5 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts6(searchText)
        .subscribe((data) => {
          this.products6 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts7(searchText)
        .subscribe((data) => {
          this.products7 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts8(searchText)
        .subscribe((data) => {
          this.products8 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts9(searchText)
        .subscribe((data) => {
          this.products9 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts10(searchText)
        .subscribe((data) => {
          this.products10 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts11(searchText)
        .subscribe((data) => {
          this.products11 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts12(searchText)
        .subscribe((data) => {
          this.products12 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts13(searchText)
        .subscribe((data) => {
          this.products13 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts14(searchText)
        .subscribe((data) => {
          this.products14 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts15(searchText)
        .subscribe((data) => {
          this.products15 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts16(searchText)
        .subscribe((data) => {
          this.products16 = data;
          this.searchText = searchText;
        });

      this.keresesS.searchProducts17(searchText)
        .subscribe((data) => {
          this.products17 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts18(searchText)
        .subscribe((data) => {
          this.products18 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts19(searchText)
        .subscribe((data) => {
          this.products19 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts20(searchText)
        .subscribe((data) => {
          this.products20 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts21(searchText)
        .subscribe((data) => {
          this.products21 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts22(searchText)
        .subscribe((data) => {
          this.products22 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts23(searchText)
        .subscribe((data) => {
          this.products23 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts24(searchText)
        .subscribe((data) => {
          this.products24 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts25(searchText)
        .subscribe((data) => {
          this.products25 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts26(searchText)
        .subscribe((data) => {
          this.products26 = data;
          this.searchText = searchText;
        });
      this.keresesS.searchProducts27(searchText)
        .subscribe((data) => {
          this.products27 = data;
          this.searchText = searchText;
        });





    });
  }

  ngOnInit(): void {
  }

}
