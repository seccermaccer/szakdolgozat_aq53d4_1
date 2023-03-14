import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KosarService {
  cart: { product: any, quantity: number }[] = [];
  totalPrice: number = 0;

  constructor() { }

  // addToCart(product: any, quantity: number) {
  //   if (quantity !== undefined && quantity > 0) {
  //     const item = { product, quantity };
  //     this.cart.push(item);
  //     item.product.mennyiseg += 1;
  //     item.product.mennyiseg1 += 1;
  //     item.product.mennyiseg2 += 1;
  //   }else {
  //     window.alert("Rossz mennyiséget adtál meg!")
  //   }
  // }

  addToCart(product: any, quantity: number) {
    if (quantity !== undefined && quantity > 0) {
      if (!this.isAlreadyInCart(product)) {
        const item = { product, quantity };
        this.cart.push(item);
        item.product.mennyiseg += quantity;
        item.product.mennyiseg1 += quantity;
        item.product.mennyiseg2 += quantity;
        item.product.mennyiseg3 += quantity;
        item.product.mennyiseg4 += quantity;
        item.product.ar *= quantity;
        item.product.ar1 *= quantity;
        item.product.ar2 *= quantity;
        item.product.ar3 *= quantity;
        item.product.ar4 *= quantity;

        this.totalPrice += item.product.ar+item.product.ar1+item.product.ar2+item.product.ar3+item.product.ar4
      } else {
        window.alert("Ez a termék már szerepel a kosárban!");
      }
    } else {
      window.alert("Rossz mennyiséget adtál meg!")
    }
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }

  getTotalPrice(){
    return this.totalPrice;
  }

  private isAlreadyInCart(product: any): boolean {
    return this.cart.some((item) => item.product.id2 === product.id2);
  }

  removeFromCart(product: any) {
    const existingItem = this.cart.find(item => item.product.id2 === product.id2);

    if (existingItem) {


        this.cart = this.cart.filter(item => item.product.id2 !== product.id2);

    }
  }
}
