import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SegementPage } from './segement.page';

const routes: Routes = [
  {
    path: '',
    component: SegementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SegementPageRoutingModule {}
