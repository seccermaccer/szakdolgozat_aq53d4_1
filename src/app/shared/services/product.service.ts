import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedProductId: number | undefined;
  showProducts: boolean | undefined;

  setSelectedProductId(id: number) {
    this.selectedProductId = id;
    this.showProducts = true;
  }

  getSelectedProductId(): number {
    return <number>this.selectedProductId;
  }

  getShowProducts(): boolean {
    return <boolean>this.showProducts;
  }
}
