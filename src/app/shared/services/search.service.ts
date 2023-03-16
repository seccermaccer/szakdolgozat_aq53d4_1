import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/compat/database";
import { Observable } from 'rxjs';
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  collectionName = 'Products';

  constructor(private db: AngularFireDatabase,private afs: AngularFirestore) { }

  getProducts(): Observable<any> {
    return this.db.list('Products').valueChanges();
  }

  searchProducts(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName15', '>=', searchText)
        .where('productName15', '<', searchText + '\uf8ff')
    ).valueChanges();
  }




}
