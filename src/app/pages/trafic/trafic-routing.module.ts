import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraficPage } from './trafic.page';

const routes: Routes = [
  {
    path: '',
    component: TraficPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraficPageRoutingModule {}
