import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Comment} from "../models/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  collectionName = 'Comments';
  productsCollectionName = 'Products';

  constructor(private afs: AngularFirestore) { }

  async create(comment: Comment){
    comment.id = this.afs.createId();
    comment.date = new Date();


    const productName = comment.productName;

    const product = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName15', '==', productName)).get().toPromise();
    if (product) {
      comment.productId = product.docs[0].get('id2');
    }

    return this.afs.collection<Comment>(this.collectionName).doc(comment.id).set(comment);
  }


  getAll(){
    return this.afs.collection<Comment>(this.collectionName).valueChanges();
  }

  update(){

  }

  delete(){

  }
}
