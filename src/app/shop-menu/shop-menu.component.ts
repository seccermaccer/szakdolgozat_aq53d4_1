import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-shop-menu',
  templateUrl: './shop-menu.component.html',
  styleUrls: ['./shop-menu.component.scss']
})
export class ShopMenuComponent implements OnInit {
  categories: any;
  categoryImages: any;
  categoryImages2: any;
  categoryImages3: any;
  categoryImages4: any;
  categoryImages5: any;
  categoryImages6: any;
  categoryImages7: any;
  categoryImages8: any;



  constructor(private authS: AuthService) { }

  ngOnInit(): void {
    this.authS.getCategories().subscribe(data => {
      this.categories = data;
      this.categoryImages = this.categories.map((category: { imageUrl: any; }) => category.imageUrl);
      this.categoryImages2 = this.categories.map((category: { imageUrl2: any; }) => category.imageUrl2);
      this.categoryImages3 = this.categories.map((category: { imageUrl3: any; }) => category.imageUrl3);
      this.categoryImages4 = this.categories.map((category: { imageUrl4: any; }) => category.imageUrl4);
      this.categoryImages5 = this.categories.map((category: { imageUrl5: any; }) => category.imageUrl5);
      this.categoryImages6 = this.categories.map((category: { imageUrl6: any; }) => category.imageUrl6);
      this.categoryImages7 = this.categories.map((category: { imageUrl7: any; }) => category.imageUrl7);
      this.categoryImages8 = this.categories.map((category: { imageUrl8: any; }) => category.imageUrl8);
    });
  }

}
