import { NgModule } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartDemoComponent } from './chart-demo/chart-demo.component';
import { ChartMapComponent } from './chart-map/chart-map.component';

@NgModule({
    imports: [
        HighchartsChartModule,
    ],
    declarations: [ChartDemoComponent, ChartMapComponent],
    exports: [ChartDemoComponent]
})
export class HighChartsModule { }