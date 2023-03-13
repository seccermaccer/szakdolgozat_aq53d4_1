import { Component, OnInit } from '@angular/core';
import {KosarService} from "../shared/services/kosar.service";

@Component({
  selector: 'app-kosar',
  templateUrl: './kosar.component.html',
  styleUrls: ['./kosar.component.scss']
})
export class KosarComponent implements OnInit {

  cartItems: any[] = [];

  constructor(private cartService: KosarService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }

}
