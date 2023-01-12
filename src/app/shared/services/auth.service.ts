import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authh: AngularFireAuth,private router: Router) { }

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

  forgotPassword(passwordResetEmail:string){
    this.authh.sendPasswordResetEmail(passwordResetEmail).then(() => {
      window.alert('A jelszó visszaállító emailt elküldtük.')
      this.router.navigate(['fooldal'])
    }).catch(error => {
      window.alert(error);
    });
  }
}
