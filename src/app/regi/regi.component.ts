import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";
import {User} from "../shared/models/User";
import {UserService} from "../shared/services/user.service";

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    } else {
      return null;
    }
  };
}

@Component({
  selector: 'app-regi',
  templateUrl: './regi.component.html',
  styleUrls: ['./regi.component.scss']
})
export class RegiComponent implements OnInit {

  signUpForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    lakcim: new FormControl('',Validators.required),
    telefonszam: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    confirmPassword: new FormControl('',Validators.required),
    aszf: new FormControl('',Validators.required),
  }, { validators: passwordsMatchValidator() }
  );

  constructor(private authService: AuthService,private router: Router,private userService: UserService) { }

  ngOnInit(): void {
  }

  get name(){
    return this.signUpForm.get('name');
  }

  get email(){
    return this.signUpForm.get('email');
  }

  get password(){
    return this.signUpForm.get('password');
  }

  get confirmPassword(){
    return this.signUpForm.get('confirmPassword');
  }

  get lakcim(){
    return this.signUpForm.get('lakcim');
  }

  get telefonszam(){
    return this.signUpForm.get('telefonszam');
  }

  get aszf(){
    return this.signUpForm.get('aszf');
  }

  submit(){
    if(!this.signUpForm.valid) return;


    console.log(this.signUpForm.value);
    this.authService.signUp(<string>this.signUpForm.get('email')?.value,<string>this.signUpForm.get('password')?.value).then(cred =>{
      console.log(cred);
      this.authService.sendEmail(cred.user);
      window.alert("Sikeres regisztráció!Erősítse meg az emailjét mielőtt belép!")
      this.router.navigate(['bejelentkezes'])
      const user: User = {
        id: cred.user?.uid as string,
        name: <string>this.signUpForm.get('name')?.value,
        email: <string>this.signUpForm.get('email')?.value,
        username: <string>this.signUpForm.get('email')?.value?.split('@')[0],
        lakcim: <string>this.signUpForm.get('lakcim')?.value,
        telefonszam: <string>this.signUpForm.get('telefonszam')?.value,

      };
      this.userService.create(user).then(_ =>{
        console.log('Sikeres beszúrás')
      }).catch(error =>{
        console.log(error)
      })

    }).catch(error =>{
      console.error(error);
      window.alert("Sikertelen regisztráció!"+error);
    } );

  }

}
