import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Comment} from "../models/Comment";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  collectionName = 'Comments';
  productsCollectionName = 'Products';

  user?: User;

  constructor(private afs: AngularFirestore) { }

  async create(comment: Comment){
    comment.id = this.afs.createId();
    comment.date = new Date();


    const productName = comment.productName;

    const product = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName15', '==', productName)).get().toPromise();
    const product2 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName1', '==', productName)).get().toPromise();
    const product3 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName18', '==', productName)).get().toPromise();
    const product4 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName9', '==', productName)).get().toPromise();
    const product5 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName27', '==', productName)).get().toPromise();
    const product6 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName16', '==', productName)).get().toPromise();
    const product7 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName19', '==', productName)).get().toPromise();
    const product8 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName5', '==', productName)).get().toPromise();
    const product9 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName24', '==', productName)).get().toPromise();
    const product10 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName20', '==', productName)).get().toPromise();
    const product11 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName12', '==', productName)).get().toPromise();
    const product12 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName6', '==', productName)).get().toPromise();
    const product13 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName4', '==', productName)).get().toPromise();
    const product14 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName25', '==', productName)).get().toPromise();
    const product15 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName17', '==', productName)).get().toPromise();
    const product16 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName10', '==', productName)).get().toPromise();
    const product17 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName13', '==', productName)).get().toPromise();
    const product18 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName11', '==', productName)).get().toPromise();
    const product19 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName2', '==', productName)).get().toPromise();
    const product20 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName21', '==', productName)).get().toPromise();
    const product21 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName3', '==', productName)).get().toPromise();
    const product22 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName7', '==', productName)).get().toPromise();
    const product23 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName22', '==', productName)).get().toPromise();
    const product24 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName8', '==', productName)).get().toPromise();
    const product25 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName14', '==', productName)).get().toPromise();
    const product26 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName23', '==', productName)).get().toPromise();
    const product27 = await this.afs.collection(this.productsCollectionName, ref => ref.where('productName26', '==', productName)).get().toPromise();

    if (product) {
      comment.productId = product?.docs?.[0]?.get('id2') || product2?.docs?.[0]?.get('id2') || product3?.docs?.[0]?.get('id2') || product4?.docs?.[0]?.get('id2')
      || product5?.docs?.[0]?.get('id2') || product6?.docs?.[0]?.get('id2') || product7?.docs?.[0]?.get('id2') || product8?.docs?.[0]?.get('id2')
      || product9?.docs?.[0]?.get('id2') || product10?.docs?.[0]?.get('id2') || product11?.docs?.[0]?.get('id2') || product12?.docs?.[0]?.get('id2')
      || product13?.docs?.[0]?.get('id2') || product14?.docs?.[0]?.get('id2') || product15?.docs?.[0]?.get('id2') || product16?.docs?.[0]?.get('id2')
      || product17?.docs?.[0]?.get('id2') || product18?.docs?.[0]?.get('id2') || product19?.docs?.[0]?.get('id2') || product20?.docs?.[0]?.get('id2')
      || product21?.docs?.[0]?.get('id2') || product22?.docs?.[0]?.get('id2') || product23?.docs?.[0]?.get('id2') || product24?.docs?.[0]?.get('id2')
      || product25?.docs?.[0]?.get('id2') || product26?.docs?.[0]?.get('id2') || product27?.docs?.[0]?.get('id2')

    }

    return this.afs.collection<Comment>(this.collectionName).doc(comment.id).set(comment);
  }


  getAll(){
    return this.afs.collection<Comment>(this.collectionName).valueChanges();
  }

  update(comment: Comment){
    return this.afs.collection<Comment>(this.collectionName).doc(comment.id).set(comment);
  }

  delete(id: string){
    return this.afs.collection<Comment>(this.collectionName).doc(id).delete();
  }



  async getCommentsByUser(userId: string): Promise<Comment[]> {
    const snapshot = await this.afs.collection<Comment>(this.collectionName, ref => ref.where('username', '==', userId)).get().toPromise();
    if (snapshot?.docs) {
      return snapshot.docs.map(doc => doc.data());
    } else {
      return [];
    }
  }

}
