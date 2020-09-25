import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {
  categoryList = ["Seeds", "Fertilizers", "Hardwares","Insecticide", "Cattle Food"]
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
