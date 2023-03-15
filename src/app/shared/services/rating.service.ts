import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private afs: AngularFirestore) { }

  getAverageRating(productId: string) {
    return this.afs.collection('Comments', ref => ref.where('productId', '==', productId)).valueChanges({ idField: 'id' })
      .pipe(
        map((comments: any[]) => {
          const ratings = comments.map(comment => comment.rating);
          const sum = ratings.reduce((acc, curr) => acc + curr, 0);
          const avg = sum / ratings.length;
          return isNaN(avg) ? 0 : avg;
        })
      );
  }
}
