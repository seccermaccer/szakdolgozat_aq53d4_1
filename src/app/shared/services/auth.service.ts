import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import {Auth, authState, updateProfile, UserInfo} from "@angular/fire/auth";
import {concatMap, Observable, of} from "rxjs";
import {AngularFirestore} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser$ = authState(this.auth);

  constructor(private authh: AngularFireAuth,private router: Router,private auth: Auth,private firestore: AngularFirestore) { }

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

  updateProfileData(profileData: Partial<UserInfo>): Observable<any>{
    const user = this.auth.currentUser;
    return of(user).pipe(
      concatMap(user => {
        if(!user) throw new Error('Nincs azonosítva a felhasználó!');

        return updateProfile(user,profileData);
      })
    );
  }

  getCategories(): Observable<any> {
    return this.firestore.collection('Categories').valueChanges();
  }

}
