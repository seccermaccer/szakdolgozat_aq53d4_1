import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {KosarService} from "../shared/services/kosar.service";
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-megrendeles',
  templateUrl: './megrendeles.component.html',
  styleUrls: ['./megrendeles.component.scss']
})
export class MegrendelesComponent implements OnInit {

  totalPrice: number = 0;

  constructor(private router: Router,private kosarS: KosarService,private authS: AuthService) { }

  ngOnInit(): void {
  }


  order(){
    if(this.authS.isAuthenticated()){
      if(confirm('Biztosan szeretnéd megrendelni az adott termékeket?Csak akkor fogadd el!')){
        window.alert('Sikeres megrendelés hamarosan tájékoztatunk a továbbiakról!')
        this.router.navigate(['fooldal'])
        this.kosarS.clearCart();
      }
    }else{
      window.alert("Először jelentkezz be!")
      this.router.navigate(['bejelentkezes'])
    }
  }

  totalPricer(){
    this.totalPrice = this.kosarS.getTotalPrice();
  }

  onTotalPriceChanged(price: number) {
    this.totalPrice = price;
  }


  }

