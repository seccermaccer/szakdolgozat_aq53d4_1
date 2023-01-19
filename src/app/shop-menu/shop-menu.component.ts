import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-shop-menu',
  templateUrl: './shop-menu.component.html',
  styleUrls: ['./shop-menu.component.scss']
})
export class ShopMenuComponent implements OnInit {
  categories: any;

  constructor(private authS: AuthService) { }

  ngOnInit(): void {
    this.authS.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

}
