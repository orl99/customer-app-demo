import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import { Label, Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-linear-chart',
  templateUrl: './linear-chart.component.html',
  styleUrls: ['./linear-chart.component.scss'],
})
export class LinearChartComponent implements OnInit, AfterViewInit {

   // In coming Chart data
   @Input() inputChartData: any;
   @Input() inputChartType: string;
   @Input() inputChartName: string;
   @Input() customColors: any;
   @Input() customOptions: ChartOptions;
   @Input() isDemo: boolean;
   @ViewChild('DomCanvas', {static: false}) canvas: ElementRef;

   chartName: string;

   // Local Data chart state
   chartData: ChartDataSets[] = [
     {data: [], label: 'data'}
   ];
   // Labels Data chart state
   chartLabels: Label[];

   // Chart Options
   chartOptions: ChartOptions = {
     responsive: true,
     title: {
       display: false,
       text: ''
     },
     scales: {
    xAxes: [{
         ticks: {
             autoSkip: true,
             maxTicksLimit: 5
         }
     }],
     yAxes: [{
       ticks: {
         autoSkip: true,
         maxTicksLimit: 5,
       }
     }]
     }
   };
   chartColors: any[] = [
    {
       borderColor: '#000',
       backgroundColor: '#ff00ff',
    }
   ];
   chartType = '';
   showLengend = false;
  isDemoFlagLabel: string;

  constructor() { }

  ngOnInit() {
    if (this.isDemo) {
      this.isDemoFlagLabel = '*Datos Demo';
    } else {
      this.isDemoFlagLabel = '*Datos reales';
    }
    this.chartDataInjector(this.inputChartData);
    (this.inputChartType) ?
                this.chartType = this.inputChartType
              :
                this.chartType = 'line';
    console.log('chart name', this.chartName);
    this.chartName = this.inputChartName;

    // Validated custom colors
    if (!!this.customColors) {
      console.log('colors', this.customColors);
      this.chartColors[0].backgroundColor = this.customColors;
    }

    // Validated custom options
    if (!!this.customOptions) {
      this.showLengend = true;
      this.chartOptions = this.customOptions;
    }
  }

  chartDataInjector(chartData: any) {
    console.log('this.inputChartData', this.inputChartData);
    this.chartData[0].data = [];
    this.chartLabels = [];
    this.chartData[0].data = chartData.data;
    this.chartLabels = chartData.labels;
    console.log(this.chartData);
    // for (const data of chartData) {
    //   // Todo change when the data is ready
    //   this.chartData.push(data.chartData);
    //   this.chartLabels.push(data.labels);
    // }
  }

  ngAfterViewInit() {
    if (!this.customColors) {
      const domCanvasAccess = this.canvas.nativeElement as HTMLCanvasElement;
      const width = window.innerWidth || document.body.clientWidth;
      const gradientColor = domCanvasAccess.getContext('2d').createLinearGradient(0, 0, width, 0);
      gradientColor.addColorStop(0, '#7C4DFF');
      gradientColor.addColorStop(0.3, '#448AFF');
      gradientColor.addColorStop(0.6, '#00BCD4');
      gradientColor.addColorStop(1, '#1DE9B6');
      this.chartColors[0].backgroundColor = gradientColor;
      if ( this.chartType === 'line' || this.chartType === 'bar' ) {
        this.chartColors[0].borderColor = gradientColor;
        this.chartColors[0].pointBackgroundColor = '#FFFFFF';
        this.chartColors[0].pointBorderColor = '#FFFFFF';
      }
    }
  }

}
