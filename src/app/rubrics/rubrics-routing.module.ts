import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RubricsPage } from './rubrics.page';

const routes: Routes = [
  {
    path: '',
    component: RubricsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RubricsPageRoutingModule {}
