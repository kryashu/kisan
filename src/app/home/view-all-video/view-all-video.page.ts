import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-video',
  templateUrl: './view-all-video.page.html',
  styleUrls: ['./view-all-video.page.scss'],
})
export class ViewAllVideoPage implements OnInit {
  array = [0,1,2,3,4,5,6,7,8,9];
  constructor() { }

  ngOnInit() {
  }

}
