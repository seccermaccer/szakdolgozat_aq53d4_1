import { Component, OnInit } from '@angular/core';
import {User} from "../shared/models/User";
import {UserService} from "../shared/services/user.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  signUpForm = new FormGroup({
      name: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      lakcim: new FormControl('',Validators.required),
      telefonszam: new FormControl('',Validators.required),
    }
  )

  get name(){
    return this.signUpForm.get('name');
  }

  get email(){
    return this.signUpForm.get('email');
  }

  get lakcim(){
    return this.signUpForm.get('lakcim');
  }

  get telefonszam(){
    return this.signUpForm.get('telefonszam');
  }

  user?: User;

  constructor(private userS: UserService,private router: Router) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userS.getById(user.uid).subscribe(data => {
      this.user = data;
    },error => {
      console.error(error);
    })
  }

  onSubmit(userProfileForm: { form: { valid: any; }; }){
    if(userProfileForm.form.valid){
      this.userS.update(<User>this.user).then(user => {
        console.log('user',user);
        window.alert('Sikeres adat megváltoztatás!')
        this.router.navigate(['profil'])
      }).catch(error => {
        console.error(error);
        window.alert('Sikertelen adat megváltoztatás!')
      });
    }
  }

}
