import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  email: string = '';

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  forgotPassword(){
    this.authService.forgotPassword(this.email);
    this.email = '';
  }

}
