import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionShitPageRoutingModule } from './action-shit-routing.module';

import { ActionShitPage } from './action-shit.page';
import { ComponentModule } from 'src/app/components/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActionShitPageRoutingModule,
    ComponentModule
  ],
  declarations: [ActionShitPage]
})
export class ActionShitPageModule {}
