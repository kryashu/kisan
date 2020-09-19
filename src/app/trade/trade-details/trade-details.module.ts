import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradeDetailsPageRoutingModule } from './trade-details-routing.module';

import { TradeDetailsPage } from './trade-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TradeDetailsPageRoutingModule
  ],
  declarations: [TradeDetailsPage]
})
export class TradeDetailsPageModule {}
