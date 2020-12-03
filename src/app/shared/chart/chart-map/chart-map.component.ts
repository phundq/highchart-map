import { Component, OnInit } from '@angular/core';
import { Options } from "highcharts";
import * as Highcharts from "highcharts/highmaps";
import mapJP from "../map/jp/jp-all.geo.json";
import mapVN from "../map/vn/vn-all.geo.json";
import { dataJP, dataVN } from "./mock-data"

@Component({
  selector: 'app-chart-map',
  templateUrl: './chart-map.component.html',
  styleUrls: ['./chart-map.component.scss']
})
export class ChartMapComponent implements OnInit {

  public highCharts: typeof Highcharts = Highcharts;
  public chartConstructor = 'mapChart';
  public chartOptions: Options;
  public oneToOneFlag = true;
  dataJP: (number | [string, number] | Highcharts.SeriesMapDataOptions)[] = dataJP;
  dataVN: (number | [string, number] | Highcharts.SeriesMapDataOptions)[] = dataVN;

  constructor(
  ) { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        type: "map",
        map: mapJP
      },

      title: {
        text: 'Highmaps basic demo'
      },

      subtitle: {
        text: 'Source map: Japan'
      },

      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        }
      },

      colorAxis: {
        min: 0
      },

      series: [
        {
          type: "map",
          name: "Example data",
          states: {
            hover: {
              color: "#BADA55"
            }
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}"
          },
          allAreas: false,
          data: this.dataJP
        }
      ]
    };



    Highcharts.mapChart('container', {
      chart: {
        map: mapVN,
        events: {
          click: function (e: any) {
            console.log(
              e.xAxis[0].value,
              e.yAxis[0].value
            )
          }
        }
      },

      credits: {
        enabled: false
      },

      title: {
        text: ''
      },

      // subtitle: {
      //   text: 'Source map: Vietnam'
      // },

      mapNavigation: {
        enabled: true,
        buttonOptions: {
          verticalAlign: 'bottom'
        },
        enableDoubleClickZoomTo: true,
        mouseWheelSensitivity: 1.5
      },

      colorAxis: {
        dataClasses: [
          {
            name: "0",
            from: 0,
            to: 0,
            color: "#81c784"
          },
          {
            name: "1 - 10",
            from: 1,
            to: 10,
            color: "#fff9c4"
          },
          {
            name: "11 - 100",
            from: 11,
            to: 100,
            color: "#ff8f00"
          },
          {
            name: "101 - 1000",
            from: 101,
            to: 1000,
            color: "#ff5722"
          },
          {
            name: "trên 1000",
            from: 1001,
            color: "#bf360c"
          }],
        min: 0,
        max: 100,
        // type: 'logarithmic',
        // lineColor: "#000000",
      },

      series: [
        {
          type: "map",
          name: "Example data",
          states: {
            hover: {
              color: "#0277bd"
            }
          },
          dataLabels: {
            enabled: false,
            format: "{point.name}"
          },
          allAreas: false,
          data: this.dataVN
        }
      ],
      legend: {
        symbolHeight: 12,
        symbolWidth: 12,
        symbolRadius: 0
    },

    });
  }

}
