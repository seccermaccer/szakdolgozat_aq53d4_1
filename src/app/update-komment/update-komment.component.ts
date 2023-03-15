import { Component, OnInit } from '@angular/core';
import {CommentService} from "../shared/services/comment.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../shared/models/User";
import {Comment} from "../shared/models/Comment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-komment',
  templateUrl: './update-komment.component.html',
  styleUrls: ['./update-komment.component.scss']
})
export class UpdateKommentComponent implements OnInit {

  user?: User;
  comment?: Comment;

  commentsForm = new FormGroup({
    username: new FormControl('',Validators.required),
    comment: new FormControl('',Validators.required),


    productName: new FormControl('',Validators.required),

    rating: new FormControl('',Validators.required),
  })

  constructor(private commentS: CommentService,private router: Router) { }

  ngOnInit(): void {
    let originalCommentId = this.comment?.id;
    let previousComments = JSON.parse(localStorage.getItem('comments') || '[]') as Comment[];
    // const comment = previousComments[previousComments.length - 1];
    let childComment = previousComments.find(comment => comment.id === originalCommentId);
    this.comment = childComment;
  }

  get username(){
    return this.commentsForm.get('username');
  }

  get productName(){
    return this.commentsForm.get('productName');
  }

  get comment2(){
    return this.commentsForm.get('comment');
  }

  get rating2(){
    return this.commentsForm.get('rating');
  }

  updateComment(comment: Comment) {
    this.commentS.update(comment);
    window.alert("Sikeres komment megváltoztatás!")
    this.router.navigate(['sajat-komment'])
  }

}
