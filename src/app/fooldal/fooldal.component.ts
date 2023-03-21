import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";

import {HirekService} from "../shared/services/hirek.service";

@Component({
  selector: 'app-fooldal',
  templateUrl: './fooldal.component.html',
  styleUrls: ['./fooldal.component.scss']
})
export class FooldalComponent implements OnInit {

  news$: Observable<any>;


  constructor(private hirekS: HirekService) {
    this.news$ = this.hirekS.getNews();
  }

  ngOnInit(): void {
  }



}
