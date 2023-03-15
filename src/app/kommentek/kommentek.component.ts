import { Component, OnInit } from '@angular/core';
import {Comment} from "../shared/models/Comment";
import {CommentService} from "../shared/services/comment.service";

@Component({
  selector: 'app-kommentek',
  templateUrl: './kommentek.component.html',
  styleUrls: ['./kommentek.component.scss']
})
export class KommentekComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private commentS: CommentService) { }

  ngOnInit(): void {
    this.commentS.getAll().subscribe((data) => {
      this.comments = data;
    });
  }

}
