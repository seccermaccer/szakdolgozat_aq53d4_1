import { Component, OnInit } from '@angular/core';
import {KosarService} from "../shared/services/kosar.service";

@Component({
  selector: 'app-kosar',
  templateUrl: './kosar.component.html',
  styleUrls: ['./kosar.component.scss']
})
export class KosarComponent implements OnInit {

  cartItems: any[] = [];

  totalPrice: number = 0;

  constructor(private cartService: KosarService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }

  clearCart() {
    if(confirm('Ez egy végleges funkció biztosan törölni szeretne mindent?')){
      this.cartService.clearCart();
      this.cartItems = [];
    }
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCart();
  }


  // calculateTotalPrice(): void {
  //   // Reset total price to zero
  //   this.totalPrice = 0;
  //
  //   // Loop through cart items and add up the prices
  //   this.cartItems.forEach(item => {
  //     if (item.product.productName1) {
  //       this.totalPrice += item.product.mennyiseg2 * item.product.ar;
  //     }
  //     if (item.product.productName2) {
  //       this.totalPrice += item.product.mennyiseg1 * item.product.ar1;
  //     }
  //     if (item.product.productName3) {
  //       this.totalPrice += item.product.mennyiseg * item.product.ar2;
  //     }
  //     if (item.product.productName4) {
  //       this.totalPrice += item.product.mennyiseg3 * item.product.ar3;
  //     }
  //   });
  // }
}
