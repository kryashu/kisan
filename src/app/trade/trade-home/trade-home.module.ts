import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradeHomePageRoutingModule } from './trade-home-routing.module';

import { TradeHomePage } from './trade-home.page';
import {TradePostPageModule} from "../trade-post/trade-post.module";
import {MyRequestsPageModule} from "../my-requests/my-requests.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TradeHomePageRoutingModule,
        TradePostPageModule,
        MyRequestsPageModule
    ],
  declarations: [TradeHomePage]
})
export class TradeHomePageModule {}
