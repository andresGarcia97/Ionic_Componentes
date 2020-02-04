import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfscrollPageRoutingModule } from './infscroll-routing.module';

import { InfscrollPage } from './infscroll.page';
import { ComponentModule } from 'src/app/components/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfscrollPageRoutingModule,
    ComponentModule
  ],
  declarations: [InfscrollPage]
})
export class InfscrollPageModule {}
