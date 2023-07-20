import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ChartsModule } from 'ng2-charts';

// Components
import { HeaderComponent } from './components/layout/header/header.component';
import { LinearChartComponent } from './components/charts/linear-chart/linear-chart.component';
import { TrackingTimeLineComponent } from './components/molecules/tracking-time-line/tracking-time-line.component';
import { TrackingTimeLineSimpleComponent } from './components/organisms/tracking-time-line-simple/tracking-time-line-simple.component';
import { TableComponent } from './components/organisms/table/table.component';

// Material Modules
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';



const sharedComponents = [
  HeaderComponent,
  LinearChartComponent,
  TrackingTimeLineSimpleComponent,
  TableComponent
];

const materialModules = [
  MatIconModule,
  MatTableModule
];

@NgModule({
  declarations: [
    ...sharedComponents,
    TrackingTimeLineComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    ChartsModule,
    ...materialModules,

  ],
  exports: [
    ...sharedComponents
  ]
})
export class SharedModule { }
