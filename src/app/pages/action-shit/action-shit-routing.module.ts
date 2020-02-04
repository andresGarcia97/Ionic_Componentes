import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActionShitPage } from './action-shit.page';

const routes: Routes = [
  {
    path: '',
    component: ActionShitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActionShitPageRoutingModule {}
