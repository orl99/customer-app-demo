import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';

import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule
  ],
  exports: [MainComponent]
})
export class ReportsModule { }
