import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mandi',
  templateUrl: './mandi.page.html',
  styleUrls: ['./mandi.page.scss'],
})
export class MandiPage implements OnInit {

  constructor() { }
  name;
  state;
  city;
  mandi;
  list = [{name: 'Crop Name', max: '$200', min: '$180'}];
  myDate = Date.now();
  ngOnInit() {
  }
}
