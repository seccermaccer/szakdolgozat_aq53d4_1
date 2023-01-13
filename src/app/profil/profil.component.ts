import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/services/user.service";
import {User} from "../shared/models/User";
import {AuthService} from "../shared/services/auth.service";
import {ImageUploadService} from "../shared/services/image-upload.service";
import {concatMap} from "rxjs";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  user?: User;

  user$ = this.authS.currentUser$;

  constructor(private userS: UserService,private authS: AuthService,private imageS: ImageUploadService) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userS.getById(user.uid).subscribe(data => {
      this.user = data;
    },error => {
      console.error(error);
    })
  }

  uploadImage(event: any,user: User){
    this.imageS.uploadImage(event.target.files[0],`images/profile/${user.id}`).pipe(
      concatMap((photoURL) => this.authS.updateProfileData({photoURL}))
    ).subscribe();
  }

}
