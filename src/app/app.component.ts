import { Component } from '@angular/core';
import {AuthService} from "./shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  constructor(public authService: AuthService,private router: Router) {
  }

  logout(){
    this.authService.logout().subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
