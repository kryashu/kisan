import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem-info',
  templateUrl: './problem-info.page.html',
  styleUrls: ['./problem-info.page.scss'],
})
export class ProblemInfoPage implements OnInit {
  type: string;
  array = [0,1,2,3,4,5,6,7,8,9];
  constructor() { }

  ngOnInit() {
    this.type = 'info';
  }

}
