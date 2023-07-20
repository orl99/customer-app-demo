import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedimentsPageRoutingModule } from './pediments-routing.module';

import { PedimentsPage } from './pediments.page';

// Shared Module
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedimentsPageRoutingModule,
    SharedModule
  ],
  declarations: [PedimentsPage]
})
export class PedimentsPageModule {}
