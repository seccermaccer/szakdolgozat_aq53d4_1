import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../shared/services/search.service";

@Component({
  selector: 'app-kereses',
  templateUrl: './kereses.component.html',
  styleUrls: ['./kereses.component.scss']
})
export class KeresesComponent implements OnInit {

  searchText = '';
  products: any[] | undefined;

  constructor(private route: ActivatedRoute,private keresesS: SearchService) {
    this.route.queryParams.subscribe(params => {
      const searchText = params['q'];
      this.keresesS.searchProducts(searchText)
        .subscribe((data) => {
          this.products = data;
          this.searchText = searchText;
        });
    });
  }

  ngOnInit(): void {
  }

}
