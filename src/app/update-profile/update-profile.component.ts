import { Component, OnInit } from '@angular/core';
import {User} from "../shared/models/User";
import {UserService} from "../shared/services/user.service";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  user?: User;

  constructor(private userS: UserService) { }

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
      }).catch(error => {
        console.error(error);
      });
    }
  }

}
