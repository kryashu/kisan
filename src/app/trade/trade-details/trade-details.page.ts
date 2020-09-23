import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";


@Component({
  selector: 'app-trade-details',
  templateUrl: './trade-details.page.html',
  styleUrls: ['./trade-details.page.scss'],
})
export class TradeDetailsPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
