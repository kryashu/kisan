import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MandiPage } from './mandi.page';

const routes: Routes = [
  {
    path: '',
    component: MandiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MandiPageRoutingModule {}
