import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomSellRequestPage } from './custom-sell-request.page';

const routes: Routes = [
  {
    path: '',
    component: CustomSellRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomSellRequestPageRoutingModule {}
