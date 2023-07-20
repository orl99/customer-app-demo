import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


import { MainComponent } from './main/main.component';
// Shared
import { SharedModule } from 'src/app/shared/shared.module';
import {MatIconModule} from '@angular/material/icon';


// Service
import { GeneralChartsService } from './service/general-charts.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MainComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    MatIconModule,
    HttpClientModule
  ],
  exports: [
    MainComponent
  ],
  providers: [GeneralChartsService]
})
export class GeneralChartsModule { }
