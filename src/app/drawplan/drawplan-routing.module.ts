import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrawplanPage } from './drawplan.page';

const routes: Routes = [
  {
    path: '',
    component: DrawplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrawplanPageRoutingModule {}
