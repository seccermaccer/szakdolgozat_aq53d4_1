import {Component, OnInit} from '@angular/core';
import {UserService} from "../shared/services/user.service";
import {User} from "../shared/models/User";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Comment} from "../shared/models/Comment";
import {CommentService} from "../shared/services/comment.service";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  user?: User;

  commentsForm = new FormGroup({
    username: new FormControl('',Validators.required),
    comment: new FormControl('',Validators.required),


    productName: new FormControl('',Validators.required),

    rating: new FormControl('',Validators.required),
  })

  constructor(private userS: UserService,private router: Router,private commentS: CommentService) { }

  ngOnInit(): void {

    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userS.getById(user.uid).subscribe(data => {
      this.user = data;
    },error => {
      console.error(error);
    })
  }


  get username(){
    return this.commentsForm.get('username');
  }

  get productName(){
    return this.commentsForm.get('productName');
  }

  get comment(){
    return this.commentsForm.get('comment');
  }

  get rating2(){
    return this.commentsForm.get('rating');
  }

  addComment() {
    if (this.commentsForm.valid) {
      const username = this.commentsForm.get('username')?.value;
      if (username && this.commentsForm.get('productName')?.value && this.commentsForm.get('comment')?.value && this.commentsForm.get('rating')?.value) {
        const comment: Comment = {
          username: <string>this.commentsForm.value.username,
          productName: <string>this.commentsForm.value.productName,
          comment: <string>this.commentsForm.value.comment,
          rating: <number><unknown>this.commentsForm.value.rating,

        };

        this.commentS.create(comment).then(_ => {
          window.alert("Sikeres véleményezés és értékelés");
          this.router.navigate(['rating'])
        }).catch(error => {
          console.error(error)
        });
      }
    }
  }


}


