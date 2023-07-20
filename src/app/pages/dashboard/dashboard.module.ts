import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

// Entry modules
import { GeneralChartsModule } from 'src/app/modules/general-charts/general-charts.module';

import { DashboardPage } from './dashboard.page';
// Shared Module
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    SharedModule,
    GeneralChartsModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
