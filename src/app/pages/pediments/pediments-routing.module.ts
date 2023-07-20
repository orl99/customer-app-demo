import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PedimentsPage } from './pediments.page';

const routes: Routes = [
  {
    path: '',
    component: PedimentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedimentsPageRoutingModule {}
