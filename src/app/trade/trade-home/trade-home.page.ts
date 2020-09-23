import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {TradeDetailsPage} from "../trade-details/trade-details.page";

@Component({
  selector: 'app-trade-home',
  templateUrl: './trade-home.page.html',
  styleUrls: ['./trade-home.page.scss'],
})
export class TradeHomePage implements OnInit {
  type = 'sell';
  sellList = [{name: 'Crop Name', quantityAvailable: 200, price: '200'},{name: 'Crop Name', quantityAvailable: 200, price: '200'},{name: 'Crop Name', quantityAvailable: 200, price: '200'},{name: 'Crop Name', quantityAvailable: 200, price: '200'},{name: 'Crop Name', quantityAvailable: 200, price: '200'},{name: 'Crop Name', quantityAvailable: 200, price: '200'},{name: 'Crop Name', quantityAvailable: 200, price: '200'},{name: 'Crop Name', quantityAvailable: 200, price: '200'}];
  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: TradeDetailsPage,
      cssClass: 'modal-css',
    });
   await modal.present();
  }

}
