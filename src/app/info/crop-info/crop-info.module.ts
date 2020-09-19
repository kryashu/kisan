import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CropInfoPageRoutingModule } from './crop-info-routing.module';

import { CropInfoPage } from './crop-info.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CropInfoPageRoutingModule,
    ],
  declarations: [CropInfoPage]
})
export class CropInfoPageModule {}
