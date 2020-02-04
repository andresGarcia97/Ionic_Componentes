import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeachbarPageRoutingModule } from './seachbar-routing.module';

import { SeachbarPage } from './seachbar.page';
import { PipesModule } from 'src/app/pipes/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeachbarPageRoutingModule,
    PipesModule
  ],
  declarations: [SeachbarPage]
})
export class SeachbarPageModule {}
