import {Component, OnInit} from '@angular/core';
import {AuthService} from "./shared/services/auth.service";
import {Router} from "@angular/router";

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
         console.log(user);
         this.loggedInUser = user;
         localStorage.setItem('user',JSON.stringify(this.loggedInUser));

       },error => {
         console.error(error);
         localStorage.setItem('user',JSON.stringify(null));
       });
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
