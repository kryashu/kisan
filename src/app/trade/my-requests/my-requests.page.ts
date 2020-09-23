import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.page.html',
  styleUrls: ['./my-requests.page.scss'],
})
export class MyRequestsPage implements OnInit {
  List = [{name: 'Crop Name', quantityAvailable: 200, price: '200', type: 'Sell'},{name: 'Crop Name', quantityAvailable: 200, price: '200', type: 'Buy'},{name: 'Crop Name', quantityAvailable: 200, price: '200', type: 'Sell'},{name: 'Crop Name', quantityAvailable: 200, price: '200', type: 'Buy'},{name: 'Crop Name', quantityAvailable: 200, price: '200', type: 'Buy'},{name: 'Crop Name', quantityAvailable: 200, price: '200', type: 'Buy'}];
  constructor() { }

  ngOnInit() {
  }

}
