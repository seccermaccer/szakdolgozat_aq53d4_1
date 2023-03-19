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

  searchProducts28(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName60', '>=', searchText)
        .where('productName60', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts29(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName61', '>=', searchText)
        .where('productName61', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts30(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName62', '>=', searchText)
        .where('productName62', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts31(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName63', '>=', searchText)
        .where('productName63', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts32(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName64', '>=', searchText)
        .where('productName64', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts33(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName65', '>=', searchText)
        .where('productName65', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts34(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName66', '>=', searchText)
        .where('productName66', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts35(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName67', '>=', searchText)
        .where('productName67', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts36(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName68', '>=', searchText)
        .where('productName68', '<', searchText + '\uf8ff')
    ).valueChanges();
  }


  searchProducts37(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName69', '>=', searchText)
        .where('productName69', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts38(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName70', '>=', searchText)
        .where('productName70', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts39(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName71', '>=', searchText)
        .where('productName71', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts40(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName72', '>=', searchText)
        .where('productName72', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts41(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName73', '>=', searchText)
        .where('productName73', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts42(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName74', '>=', searchText)
        .where('productName74', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts43(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName75', '>=', searchText)
        .where('productName75', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts44(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName76', '>=', searchText)
        .where('productName76', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts45(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName77', '>=', searchText)
        .where('productName77', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts46(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName78', '>=', searchText)
        .where('productName78', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts47(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName79', '>=', searchText)
        .where('productName79', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts48(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName80', '>=', searchText)
        .where('productName80', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts49(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName81', '>=', searchText)
        .where('productName81', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts50(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName82', '>=', searchText)
        .where('productName82', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts51(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName83', '>=', searchText)
        .where('productName83', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts52(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName84', '>=', searchText)
        .where('productName84', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts53(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName85', '>=', searchText)
        .where('productName85', '<', searchText + '\uf8ff')
    ).valueChanges();
  }

  searchProducts54(searchText: string) {
    return this.afs.collection('Products', ref =>
      ref.where('productName86', '>=', searchText)
        .where('productName86', '<', searchText + '\uf8ff')
    ).valueChanges();
  }



}
