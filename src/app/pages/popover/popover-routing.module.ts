import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopoverPage } from './popover.page';
import { PopinfoComponent } from 'src/app/components/popinfo/popinfo.component';

const routes: Routes = [
  {
    path: '',
    component: PopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  entryComponents: [
    PopinfoComponent
  ],
  exports: [RouterModule],
})
export class PopoverPageRoutingModule {}
