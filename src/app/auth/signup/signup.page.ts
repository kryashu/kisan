import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  phoneNumber;
  warningFlag = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  verify() {
    if (this.phoneNumber.length === 10) {
      this.router.navigate(['verify-otp', {phone: this.phoneNumber}])
    }else{
      this.warningFlag = true;
    }
  }
}
