import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'scorer',
    loadChildren: () => import('./scorer/scorer.module').then( m => m.ScorerPageModule),
    pathMatch: 'full'
  },
  {
    path: 'drawplan',
    loadChildren: () => import('./drawplan/drawplan.module').then( m => m.DrawplanPageModule),
    pathMatch: 'full'
  },
  {
    path: 'rubrics',
    loadChildren: () => import('./rubrics/rubrics.module').then( m => m.RubricsPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./explore/explore.module').then( m => m.ExplorePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
