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

  searchProducts2(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName1', '>=', searchText)
        .where('productName1', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts3(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName18', '>=', searchText)
        .where('productName18', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts4(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName9', '>=', searchText)
        .where('productName9', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts5(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName27', '>=', searchText)
        .where('productName27', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts6(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName16', '>=', searchText)
        .where('productName16', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts7(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName19', '>=', searchText)
        .where('productName19', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts8(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName5', '>=', searchText)
        .where('productName5', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts9(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName24', '>=', searchText)
        .where('productName24', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts10(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName20', '>=', searchText)
        .where('productName20', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts11(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName12', '>=', searchText)
        .where('productName12', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts12(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName6', '>=', searchText)
        .where('productName6', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts13(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName4', '>=', searchText)
        .where('productName4', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts14(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName25', '>=', searchText)
        .where('productName25', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts15(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName17', '>=', searchText)
        .where('productName17', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts16(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName10', '>=', searchText)
        .where('productName10', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts17(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName13', '>=', searchText)
        .where('productName13', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts18(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName11', '>=', searchText)
        .where('productName11', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts19(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName2', '>=', searchText)
        .where('productName2', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts20(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName21', '>=', searchText)
        .where('productName21', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts21(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName3', '>=', searchText)
        .where('productName3', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts22(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName7', '>=', searchText)
        .where('productName7', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts23(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName22', '>=', searchText)
        .where('productName22', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts24(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName8', '>=', searchText)
        .where('productName8', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts25(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName14', '>=', searchText)
        .where('productName14', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts26(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName23', '>=', searchText)
        .where('productName23', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts27(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName26', '>=', searchText)
        .where('productName26', '<', searchText + '\uf8ff')
    ).valueChanges();
  }



}
