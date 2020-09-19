import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CropListPage } from './crop-list.page';

const routes: Routes = [
  {
    path: '',
    component: CropListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CropListPageRoutingModule {}
