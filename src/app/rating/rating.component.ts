import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../shared/services/user.service";
import {User} from "../shared/models/User";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input('rating') rating: number = 3;
  @Input('starCount') starCount: number = 5;
  @Input('color') private color: string = 'accent';
  @Output() private ratingUpdated = new EventEmitter();

  private snackBarDuration: number = 2000;
  ratingArr = [];
  private snackBar: any;
  user?: User;

  constructor(private userS: UserService) { }

  ngOnInit(): void {
    console.log("a "+this.starCount)
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(<never>index);
    }

    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userS.getById(user.uid).subscribe(data => {
      this.user = data;
    },error => {
      console.error(error);
    })
  }

  onClick(rating:number) {
    console.log(rating)
    this.rating = rating; // a rating értékének frissítése
    this.snackBar.open('Értékelésed ' + rating + ' / ' + this.starCount, '', {
      duration: this.snackBarDuration
    });
    this.ratingUpdated.emit(rating);
    return false;
  }


  showIcon(index:number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }

}
export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}


