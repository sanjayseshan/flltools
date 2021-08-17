import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrawplanPageRoutingModule } from './drawplan-routing.module';

import { DrawplanPage } from './drawplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrawplanPageRoutingModule
  ],
  declarations: [DrawplanPage]
})
export class DrawplanPageModule {}
