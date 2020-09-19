import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropListPageRoutingModule } from './crop-list-routing.module';

import { CropListPage } from './crop-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CropListPageRoutingModule
  ],
  declarations: [CropListPage]
})
export class CropListPageModule {}
