import { Component, OnInit } from '@angular/core';
import {CommentService} from "../shared/services/comment.service";
import {UserService} from "../shared/services/user.service";
import {User} from "../shared/models/User";
import {Comment} from "../shared/models/Comment";

@Component({
  selector: 'app-sajat-komment',
  templateUrl: './sajat-komment.component.html',
  styleUrls: ['./sajat-komment.component.scss']
})
export class SajatKommentComponent implements OnInit {

  user?: User;
  comments: Comment[] = [];
  comment2?: Comment;

  constructor(private commentS: CommentService,private userS: UserService) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userS.getById(user.uid).subscribe(data => {
      this.user = data;
      this.commentS.getCommentsByUser(<string>this.user?.username).then(comments2 => {
        this.comments = comments2;
        // itt dolgozd fel a kommenteket
      }).catch(error => {
        console.error(error);
      });
    },error => {
      console.error(error);
    })

    let originalCommentId = this.comment2?.id;
    let previousComments = JSON.parse(localStorage.getItem('comments') || '[]') as Comment[];
    // const comment = previousComments[previousComments.length - 1];
    let childComment = previousComments.find(comment => comment.id === originalCommentId);
    this.comment2 = childComment;
  }

  deleteComment(commentId: string | undefined) {
    const index = this.comments.findIndex(comment => comment.id === commentId);
    this.comments.splice(index, 1);
    this.commentS.delete(<string>commentId);
  }

  updateComment2(commentId: string | undefined, index: number) {
    this.comments[index] = { ...this.comments[index], id: commentId };
    // update the comment using the commentId and the index
  }


}
