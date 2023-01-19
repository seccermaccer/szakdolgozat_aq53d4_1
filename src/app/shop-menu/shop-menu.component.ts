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


  constructor(private authS: AuthService) { }

  ngOnInit(): void {
    this.authS.getCategories().subscribe(data => {
      this.categories = data;
      this.categoryImages = this.categories.map((category: { imageUrl: any; }) => category.imageUrl);
      this.categoryImages2 = this.categories.map((category: { imageUrl2: any; }) => category.imageUrl2);
    });
  }

}
