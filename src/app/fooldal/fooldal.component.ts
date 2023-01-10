import { Component, OnInit } from '@angular/core';
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-fooldal',
  templateUrl: './fooldal.component.html',
  styleUrls: ['./fooldal.component.scss']
})
export class FooldalComponent implements OnInit {


  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
