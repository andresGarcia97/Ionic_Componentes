import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegementPageRoutingModule } from './segement-routing.module';

import { SegementPage } from './segement.page';
import { ComponentModule } from 'src/app/components/component/component.module';
import { PipesModule } from '../../pipes/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegementPageRoutingModule,
    ComponentModule,
    PipesModule
  ],
  declarations: [SegementPage]
})
export class SegementPageModule {}
