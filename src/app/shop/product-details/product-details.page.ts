import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  count = 0;
  typeList = ['Type1', 'Type2']
  constructor() { }

  ngOnInit() {
  }
add(){
    this.count +=1;
}
remove(){
    if (this.count > 0){
      this.count -=1;
    }
}
}
