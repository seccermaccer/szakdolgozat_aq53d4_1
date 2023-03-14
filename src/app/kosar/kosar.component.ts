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
    this.totalPrice = 0;
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    this.cartItems = this.cartService.getCart();
    this.totalPrice = 0;
  }

  helper(){
    this.totalPrice = 0;
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
  //     if (item.product.productName5) {
  //       this.totalPrice += item.product.mennyiseg4 * item.product.ar4;
  //     }
  //   });
  // }

  getTotalPrice(): number {
    if(this.totalPrice === 0){
    for(let item of this.cartItems) {
        if(item.product.productName1) {
          this.totalPrice +=  item.product.ar;
        }
        if(item.product.productName2) {
          this.totalPrice += item.product.ar1;
        }
        if(item.product.productName3) {
          this.totalPrice +=  item.product.ar2;
        }
        if(item.product.productName4) {
          this.totalPrice += item.product.ar3;
        }
        if(item.product.productName5) {
          this.totalPrice += item.product.ar4;
        }
      if(item.product.productName6) {
        this.totalPrice += item.product.ar5;
      }
      if(item.product.productName7) {
        this.totalPrice += item.product.ar6;
      }
      if(item.product.productName8) {
        this.totalPrice += item.product.ar7;
      }
      if(item.product.productName9) {
        this.totalPrice += item.product.ar8;
      }
      if(item.product.productName10) {
        this.totalPrice += item.product.ar9;
      }
      if(item.product.productName11) {
        this.totalPrice += item.product.ar10;
      }
      if(item.product.productName12) {
        this.totalPrice += item.product.ar11;
      }
      if(item.product.productName13) {
        this.totalPrice += item.product.ar12;
      }
      if(item.product.productName14) {
        this.totalPrice += item.product.ar13;
      }
      if(item.product.productName15) {
        this.totalPrice += item.product.ar14;
      }
      if(item.product.productName16) {
        this.totalPrice += item.product.ar15;
      }
      if(item.product.productName17) {
        this.totalPrice += item.product.ar16;
      }
      if(item.product.productName18) {
        this.totalPrice += item.product.ar17;
      }
      if(item.product.productName19) {
        this.totalPrice += item.product.ar18;
      }
      if(item.product.productName20) {
        this.totalPrice += item.product.ar19;
      }
      if(item.product.productName21) {
        this.totalPrice += item.product.ar20;
      }
      if(item.product.productName22) {
        this.totalPrice += item.product.ar21;
      }
      if(item.product.productName23) {
        this.totalPrice += item.product.ar22;
      }
      if(item.product.productName24) {
        this.totalPrice += item.product.ar23;
      }
      if(item.product.productName25) {
        this.totalPrice += item.product.ar24;
      }
      if(item.product.productName26) {
        this.totalPrice += item.product.ar25;
      }
      if(item.product.productName27) {
        this.totalPrice += item.product.ar26;
      }
      }
      }

    return this.totalPrice;
  }

}
