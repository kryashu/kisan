import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradePostPageRoutingModule } from './trade-post-routing.module';

import { TradePostPage } from './trade-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TradePostPageRoutingModule
  ],
  declarations: [TradePostPage]
})
export class TradePostPageModule {}
