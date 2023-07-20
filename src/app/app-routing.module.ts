import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'trafic',
    loadChildren: () => import('./pages/trafic/trafic.module').then( m => m.TraficPageModule)
  },
  {
    path: 'pediments',
    loadChildren: () => import('./pages/pediments/pediments.module').then( m => m.PedimentsPageModule)
  },
  {
    path: 'administration',
    loadChildren: () => import('./pages/administration/administration.module').then( m => m.AdministrationPageModule)
  },
  {
    path: 'cloud-search',
    loadChildren: () => import('./pages/cloud/cloud.module').then( m => m.CloudPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
