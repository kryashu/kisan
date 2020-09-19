import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-crop-list',
  templateUrl: './crop-list.page.html',
  styleUrls: ['./crop-list.page.scss'],
})
export class CropListPage implements OnInit {
array = [0,1,2,3,4,5,6,7,8,9];
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
