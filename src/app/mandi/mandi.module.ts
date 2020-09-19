import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MandiPageRoutingModule } from './mandi-routing.module';

import { MandiPage } from './mandi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MandiPageRoutingModule
  ],
  declarations: [MandiPage]
})
export class MandiPageModule {}
