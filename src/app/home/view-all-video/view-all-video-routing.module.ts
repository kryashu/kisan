import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllVideoPage } from './view-all-video.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllVideoPageRoutingModule {}
