import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {user} from "@angular/fire/auth";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionName = 'Users';


  constructor(private afs: AngularFirestore) {


  }

  //CRUD (create,read,update,delete)

  create(user: User){
     return this.afs.collection<User>(this.collectionName).doc(user.id).set(user);
  }

  getAll(){}
}
