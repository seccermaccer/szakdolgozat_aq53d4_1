import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {AuthService} from "../shared/services/auth.service";
import {Router} from "@angular/router";

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
    confirmPassword: new FormControl('',Validators.required)
  }, { validators: passwordsMatchValidator() }
  );

  constructor(private authService: AuthService,private router: Router) { }

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

  submit(){
    if(!this.signUpForm.valid) return;

    const {name,email,lakcim,telefonszam,password } = this.signUpForm.value;
    this.authService.signUp(<string>name,<string>email,<string>lakcim,<string>telefonszam,<string>password).subscribe(() => {
      this.router.navigate(['/fooldal']);
      window.alert("Sikeres regisztráció!");
    },error =>{
      console.error(error)
      window.alert('Sikertelen regisztráció!');
    })
  }

}
