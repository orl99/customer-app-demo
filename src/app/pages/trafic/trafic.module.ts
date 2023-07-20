import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraficPageRoutingModule } from './trafic-routing.module';

import { TraficPage } from './trafic.page';

// Shared Module
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraficPageRoutingModule,
    SharedModule
  ],
  declarations: [TraficPage]
})
export class TraficPageModule {}
