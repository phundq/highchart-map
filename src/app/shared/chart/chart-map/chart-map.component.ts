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
        map: mapVN
      },
      title: {
        text: 'Highmaps basic demo'
      },

      subtitle: {
        text: 'Source map: Vietnam'
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
          data: this.dataVN
        }
      ]

    });
  }

}
