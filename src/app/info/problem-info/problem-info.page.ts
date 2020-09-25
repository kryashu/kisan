import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-problem-info',
  templateUrl: './problem-info.page.html',
  styleUrls: ['./problem-info.page.scss'],
})
export class ProblemInfoPage implements OnInit {
  type: string;
  array = [0,1,2,3,4,5,6,7,8,9];
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  constructor(private router: Router) { }

  ngOnInit() {
    this.type = 'info';
  }

}
