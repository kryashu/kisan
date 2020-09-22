import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crop-info',
  templateUrl: './crop-info.page.html',
  styleUrls: ['./crop-info.page.scss'],
})
export class CropInfoPage implements OnInit {
  type: string;
  array = [0,1,2,3,4,5,6,7,8,9];
  constructor(private router: Router) { }

  ngOnInit() {
    this.type = 'info';
  }

}
