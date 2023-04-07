import { Component, OnInit } from '@angular/core';
import {UserService} from "../shared/services/user.service";
import {User} from "../shared/models/User";
import {AuthService} from "../shared/services/auth.service";
import {ImageUploadService} from "../shared/services/image-upload.service";
import {concatMap} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  user?: User;

  user$ = this.authS.currentUser$;

  constructor(private userS: UserService,private authS: AuthService,private imageS: ImageUploadService,private router: Router) { }

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

  deleteUser($id: string){
    if(confirm("Ez egy végleges művelet.Biztos kiszeretnéd törölni a fiókodat?")){
      this.userS.delete($id);
      this.authS.logout();
      window.alert("Sikeres felhasználó törlés!");
      this.authS.deleteUser();
      this.router.navigate(['fooldal'])
    }

  }

}
