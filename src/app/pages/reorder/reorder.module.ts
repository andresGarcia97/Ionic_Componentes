import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReorderPageRoutingModule } from './reorder-routing.module';

import { ReorderPage } from './reorder.page';
import { ComponentModule } from 'src/app/components/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReorderPageRoutingModule,
    ComponentModule
  ],
  declarations: [ReorderPage]
})
export class ReorderPageModule {}
