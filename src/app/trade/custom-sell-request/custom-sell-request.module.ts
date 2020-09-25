import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomSellRequestPageRoutingModule } from './custom-sell-request-routing.module';

import { CustomSellRequestPage } from './custom-sell-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomSellRequestPageRoutingModule
  ],
  declarations: [CustomSellRequestPage]
})
export class CustomSellRequestPageModule {}
