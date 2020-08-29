import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-verify-otp',
  templateUrl: './verify-otp.page.html',
  styleUrls: ['./verify-otp.page.scss'],
})
export class VerifyOtpPage implements OnInit {
  phoneNumber;
  amd = '+91';
  firstD;
  secondD;
  thirdD;
  fourthD;
  resendText = 'Text message resent.';
  resendFlag = false;
  resendFlag1 = false;
  counter = 15;
  timerValue = '15';
  warningFlag = false;
  style;
  backspaceWave = 0;
  textFlag = true;

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.phoneNumber = params.phone;
    });
  }


  timer(bool) {
    if (bool) {
      this.resendFlag = true;
      const interval = setInterval(() => {
        this.counter -= 1;
        if (this.counter < 0) {
          this.resendText = 'Resend OTP';
          this.resendFlag = false;
          this.counter = 15;
          this.timerValue = '15';
          clearInterval(interval);
          return;
        } else if (this.counter < 10) {
          this.resendText = 'Text message resent.';
          this.timerValue = '0' + this.counter.toString();
        } else {
          this.resendText = 'Text message resent.';
          this.timerValue = this.counter.toString();
        }
      }, 1000);
    }
  }

  moveFocus(nextElement, prevElement, position, event) {
    this.textFlag = false;
    if (event.target.value !== '') {
      this.backspaceWave = 0;
      nextElement.setFocus();
    }
    if (event.key === 'Backspace' && this.backspaceWave === 0) {
      this.backspaceWave += 1;
      this.warningFlag = false;
      this.style = undefined;
    } else if (event.key === 'Backspace' && this.backspaceWave === 1) {
      if (position === 3 && (this.thirdD === undefined || this.thirdD === '')) {
        prevElement.setFocus();
      } else if (position === 2 && (this.secondD === undefined || this.secondD === '')) {
        prevElement.setFocus();
      } else {
        prevElement.setFocus();
        this.backspaceWave -= 1;
      }
    }

  }

  verify(error) {
    // tslint:disable-next-line:max-line-length
    if (this.firstD + this.secondD + this.thirdD + this.fourthD === '1111'){
      this.router.navigate(['home'])
    }
      // tslint:disable-next-line:max-line-length
      else if (this.firstD === undefined || this.secondD === undefined || this.thirdD === undefined || this.fourthD === undefined || this.firstD === '' || this.secondD === '' || this.thirdD === '' || this.fourthD === '') {
        this.warningFlag = false;
        this.style = undefined;
      } else {
        this.warningFlag = true;
        error.setFocus();
        this.style = {
          borderBottom: '1px solid #FF2650',
          color: '#FF2650'
        };
      }

  }

  clear(data) {
    this.warningFlag = false;
    this.style = undefined;
    if (data === undefined || data === '') {
      this.backspaceWave = 1;
    } else {
      this.backspaceWave = 0;
    }
    this.textFlag = false;
  }

}
