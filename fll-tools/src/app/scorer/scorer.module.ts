import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScorerPageRoutingModule } from './scorer-routing.module';

import { ScorerPage } from './scorer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScorerPageRoutingModule
  ],
  declarations: [ScorerPage]
})
export class ScorerPageModule {}
