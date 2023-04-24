import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-dashboard-pi-chart',
  templateUrl: './dashboard-pi-chart.component.html',
  styleUrls: ['./dashboard-pi-chart.component.css']
})
export class DashboardPiChartComponent {
  Highcharts=Highcharts;
  chartOptions={}
  
  constructor(){
  this.chartOptions={
    chart: {
      type: 'pie',
      options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
      }
  },
  title: {
      text: 'Average student admission , 2022-23',
      align: 'left'
  },
  subtitle: {
    //   text: 'Source: ' +
    //       '<a href="https://www.counterpointresearch.com/global-smartphone-share/"' +
    //       'target="_blank">Counterpoint Research</a>',
    //   align: 'left'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  credits:{
    enabled:false
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
              enabled: true,
              format: '{point.name}'
          }
      }
  },
  series: [{
      type: 'pie',
      name: 'Share',
      data: [
          ['MEARN', 40],
          ['PYTHON', 35],
          ['DATA SCIENCE', 30],
          ['TESTING', 25],
          ['FLUTTER', 19],
          ['.NET', 15],
          ['BIG DATA', 14],
          ['JAVA SPRING', 10],
          ['AI',8],
          ['ML',5]
      ]
  }]
  }
}
}
