import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CloudPageRoutingModule } from './cloud-routing.module';

import { CloudPage } from './cloud.page';

// Shared Module
import { SharedModule } from 'src/app/shared/shared.module';

import { ReportsModule } from 'src/app/modules/reports/reports.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CloudPageRoutingModule,
    SharedModule,
    ReportsModule
  ],
  declarations: [CloudPage]
})
export class CloudPageModule {}
