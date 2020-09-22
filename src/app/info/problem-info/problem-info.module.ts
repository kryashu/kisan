import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProblemInfoPageRoutingModule } from './problem-info-routing.module';

import { ProblemInfoPage } from './problem-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProblemInfoPageRoutingModule
  ],
  declarations: [ProblemInfoPage]
})
export class ProblemInfoPageModule {}
