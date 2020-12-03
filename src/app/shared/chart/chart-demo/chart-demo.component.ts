import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
@Component({
  selector: 'app-chart-demo',
  templateUrl: './chart-demo.component.html',
  styleUrls: ['./chart-demo.component.scss']
})
export class ChartDemoComponent implements OnInit {

  public highCharts = HighCharts;
  public chartConstructor = 'chart';
  public chartOptions: Object;
  public oneToOneFlag = true;

  public data = [{
    name: 'ItSolutionStuff.com',
    data: [500, 700, 555, 444, 777, 877, 944, 567, 666, 789, 456, 654]
  },
  {
    name: 'Nicesnippets.com',
    data: [677, 455, 677, 877, 455, 778, 888, 567, 785, 488, 567, 654]
  }
  ];
  constructor() { }

  ngOnInit() {

    this.chartOptions = {
      chart: {
        type: "spline"
      },
      title: {
        text: "Monthly Site Visitor"
      },
      xAxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yAxis: {
        title: {
          text: "Visitors"
        }
      },
      series: this.data
    };
  }


}
