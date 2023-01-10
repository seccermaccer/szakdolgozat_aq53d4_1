import {Component, OnInit} from '@angular/core';
import {AuthService} from "./shared/services/auth.service";
import {Router} from "@angular/router";
import {user} from "@angular/fire/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  loggedInUser?: firebase.default.User | null;

  constructor(public authService: AuthService,private router: Router) {
  }

  ngOnInit(): void {
       this.authService.isUserLoggedIn().subscribe(user => {
         this.loggedInUser = user;
       },error => {
         console.error(error);
       })
    }

  logout(){
    this.authService.logout().then(() => {
      console.log('Sikeres kilépés.')
      this.router.navigate(['fooldal'])
    }).catch(error => {
      console.error(error);
    });
  }
}
