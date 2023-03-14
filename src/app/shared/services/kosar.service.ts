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

        window.alert('Sikeresen beletetted a terméket a kosárba.')

        item.product.mennyiseg += quantity;
        item.product.mennyiseg1 += quantity;
        item.product.mennyiseg2 += quantity;
        item.product.mennyiseg3 += quantity;
        item.product.mennyiseg4 += quantity;
        item.product.mennyiseg5 += quantity;
        item.product.mennyiseg6 += quantity;
        item.product.mennyiseg7 += quantity;
        item.product.mennyiseg8 += quantity;
        item.product.mennyiseg9 += quantity;
        item.product.mennyiseg10 += quantity;
        item.product.mennyiseg11 += quantity;
        item.product.mennyiseg12 += quantity;
        item.product.mennyiseg13 += quantity;
        item.product.mennyiseg14 += quantity;
        item.product.mennyiseg15 += quantity;
        item.product.mennyiseg16 += quantity;
        item.product.mennyiseg17 += quantity;
        item.product.mennyiseg18 += quantity;
        item.product.mennyiseg19 += quantity;
        item.product.mennyiseg20 += quantity;
        item.product.mennyiseg21 += quantity;
        item.product.mennyiseg22 += quantity;
        item.product.mennyiseg23 += quantity;
        item.product.mennyiseg24 += quantity;
        item.product.mennyiseg25 += quantity;
        item.product.mennyiseg26 += quantity;
        item.product.ar *= quantity;
        item.product.ar1 *= quantity;
        item.product.ar2 *= quantity;
        item.product.ar3 *= quantity;
        item.product.ar4 *= quantity;
        item.product.ar5 *= quantity;
        item.product.ar6 *= quantity;
        item.product.ar7 *= quantity;
        item.product.ar8 *= quantity;
        item.product.ar9 *= quantity;
        item.product.ar10 *= quantity;
        item.product.ar11 *= quantity;
        item.product.ar12 *= quantity;
        item.product.ar13 *= quantity;
        item.product.ar14 *= quantity;
        item.product.ar15 *= quantity;
        item.product.ar16 *= quantity;
        item.product.ar17 *= quantity;
        item.product.ar18 *= quantity;
        item.product.ar19 *= quantity;
        item.product.ar20 *= quantity;
        item.product.ar21 *= quantity;
        item.product.ar22 *= quantity;
        item.product.ar23 *= quantity;
        item.product.ar24 *= quantity;
        item.product.ar25 *= quantity;
        item.product.ar26 *= quantity;

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
