import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradeDetailsPage } from './trade-details.page';

const routes: Routes = [
  {
    path: '',
    component: TradeDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradeDetailsPageRoutingModule {}
