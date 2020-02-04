import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeachbarPage } from './seachbar.page';

const routes: Routes = [
  {
    path: '',
    component: SeachbarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeachbarPageRoutingModule {}
