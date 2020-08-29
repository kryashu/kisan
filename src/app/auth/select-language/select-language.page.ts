import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-select-language',
  templateUrl: './select-language.page.html',
  styleUrls: ['./select-language.page.scss'],
})
export class SelectLanguagePage implements OnInit {
  language = ['Lang1', 'Lang2', 'Lang3', 'Lang4' , 'Lang5'];
  selectedLang = 'Lang1';
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
