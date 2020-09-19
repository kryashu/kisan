import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TradePostPage } from './trade-post.page';

const routes: Routes = [
  {
    path: '',
    component: TradePostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TradePostPageRoutingModule {}
