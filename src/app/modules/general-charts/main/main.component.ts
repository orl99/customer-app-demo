import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { GeneralChartsService } from './../service/general-charts.service';
@Component({
  selector: 'bmasc-general-charts',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  pedimentosData: any;
  isDemo = true;
  // Mock DTO
  inputChartDataPedimentos = { labels: [], data: [] };
  inputChartDataFacturados = {
    data: [174, 131, 98, 96],
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
  };
  inputChartDataStatusTrafic = {
      labels: ['rojos', 'verdes'],
      data: [3, 10],
  };
  statusTraficColors = ['#ff4961', '#2fdf75'];

  customChartOptions: ChartOptions = {
    responsive: true,
    title: {
      display: false,
      text: ''
    },
  };

  displayChartType: number = 1;
  chartNames: string[] = ['Pediementos', 'Embarques', 'Estatus de Trafico', 'Estatus de embarque en bodegas'];

  // Data
  public pediementosTotal: string;
  public showPedimentosChart: boolean;

  constructor(private generalCharts: GeneralChartsService ) {
    this.makeInitialApiCalls();
  }
  ngOnInit() {}

  /**
   * makeInitialApiCalls
   */
  public async makeInitialApiCalls() {
    const response = await this.generalCharts.totalPedimentos();
    this.pediementosTotal = response[0].Total;
    console.log('response:', this.pediementosTotal);
    this.callPedimentosOfYear();
  }

  changeChart(chartType: number) {
    console.log('type', chartType);
    this.displayChartType = chartType;
  }

  /**
   * callPedimentosOfYear
   */
  public async callPedimentosOfYear() {
    const pedimentosOfYear = await this.generalCharts.getPedimentosOfYear();
    console.log('response:', pedimentosOfYear);
    // const labels = [...Object.keys(pedimentosOfYear[0])];
    // const labels = [...Object.keys(pedimentosOfYear[0])];
    // Todo Hard code
    const data = [
      pedimentosOfYear[0].Mes1,
      pedimentosOfYear[0].Mes2,
      pedimentosOfYear[0].Mes3,
      pedimentosOfYear[0].Mes4,
    ];
    const labels = ['Enero', 'Febrero', 'Marzo', 'Abril'];
    const chartPedientosData = {
      labels,
      data,
    };
    this.inputChartDataPedimentos = { labels: [], data: [] };
    this.inputChartDataPedimentos = chartPedientosData;
    console.log(this.inputChartDataPedimentos);
    this.showPedimentosChart = true;
  }

}
