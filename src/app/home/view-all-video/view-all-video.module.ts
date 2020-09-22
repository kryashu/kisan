import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllVideoPageRoutingModule } from './view-all-video-routing.module';

import { ViewAllVideoPage } from './view-all-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllVideoPageRoutingModule
  ],
  declarations: [ViewAllVideoPage]
})
export class ViewAllVideoPageModule {}
