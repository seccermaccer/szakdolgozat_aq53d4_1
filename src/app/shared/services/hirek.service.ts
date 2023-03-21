import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HirekService {

  private apiKey = '63c0d575770b451db9df9b90dbe1c6a9';

  constructor(private http: HttpClient) {}

  getNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`;
    return this.http.get(url);
  }


}
