import { Component, OnInit } from '@angular/core';
import {TermekService} from "../../shared/services/termek.service";

@Component({
  selector: 'app-termekek',
  templateUrl: './termekek.component.html',
  styleUrls: ['./termekek.component.scss']
})
export class TermekekComponent implements OnInit {

  products: any[] | undefined;

  constructor(private termekService: TermekService) { }

  ngOnInit() {
    this.termekService.getProductsByCategory("Számítógép alkatrész").subscribe(products => {
      this.products = products;
    });
  }

}
