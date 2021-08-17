import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RubricsPageRoutingModule } from './rubrics-routing.module';

import { RubricsPage } from './rubrics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RubricsPageRoutingModule
  ],
  declarations: [RubricsPage]
})
export class RubricsPageModule {}
