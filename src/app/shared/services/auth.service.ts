import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authh: AngularFireAuth) { }

  sendEmail(user: any) {
    user.sendEmailVerification();
  }

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
