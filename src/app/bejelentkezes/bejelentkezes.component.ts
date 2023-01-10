import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bejelentkezes',
  templateUrl: './bejelentkezes.component.html',
  styleUrls: ['./bejelentkezes.component.scss']
})
export class BejelentkezesComponent implements OnInit {

  alert: boolean = false;

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',Validators.required)
  })

  constructor( private authService: AuthService,
               private router: Router,) { }

  ngOnInit(): void {
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  submit(){
    if (!this.loginForm.valid){
      return;
    }

    const {email,password} = this.loginForm.value;
    this.authService.login(<string>email,<string>password).subscribe(() => {
      this.router.navigate(['']);
      window.alert("Sikeres bejelentkezés!");
    },error =>{
        console.error(error)
        window.alert('Sikertelen bejelentkezés!Kérjük próbálja újra!');
    })

  }



  closeAlert(){
    this.alert=false;
  }

}
