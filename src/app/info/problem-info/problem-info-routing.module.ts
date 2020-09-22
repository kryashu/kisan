import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProblemInfoPage } from './problem-info.page';

const routes: Routes = [
  {
    path: '',
    component: ProblemInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProblemInfoPageRoutingModule {}
