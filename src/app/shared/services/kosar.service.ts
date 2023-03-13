import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KosarService {
  cart: { product: any, quantity: number }[] = [];

  constructor() { }

  addToCart(product: any, quantity: number) {
    if (quantity !== undefined && quantity > 0) {
      const item = { product, quantity };
      this.cart.push(item);
    }else {
      window.alert("Rossz mennyiséget adtál meg!")
    }
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
    return this.cart;
  }
}
