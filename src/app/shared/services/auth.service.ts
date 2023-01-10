import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "@angular/fire/auth";
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth,private authh: AngularFireAuth) { }

  login(username: string,password: string){
    return this.authh.signInWithEmailAndPassword(username,password);
  }

  signUp(email: string,password: string){
    return this.authh.createUserWithEmailAndPassword(email,password);
  }

  isUserLoggedIn(){
    return this.authh.user;
  }

  logout(){
    return this.authh.signOut();
  }
}
