import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HirekService {

  private apiKey = 'f262bd76e18679696590d8a860a567c8';
  private apiUrl = 'https://gnews.io/api/v4';

  constructor(private http: HttpClient) {}

  getNews() {
    const url = `${this.apiUrl}/search?q=technology&lang=en&sort_by=relevancy&page=1&token=${this.apiKey}`;
    return this.http.get(url);
  }


}
