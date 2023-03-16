import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-kereses',
  templateUrl: './kereses.component.html',
  styleUrls: ['./kereses.component.scss']
})
export class KeresesComponent implements OnInit {

  searchText = '';
  products: any[] | undefined;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.searchText = params['q'] || '';
      // Keresés a Firestore adatbázisban, és eredmények frissítése
      // this.products = ...
    });
  }

  ngOnInit(): void {
  }

}
