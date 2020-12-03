import { ChartDemoComponent } from './shared/chart/chart-demo/chart-demo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartMapComponent } from './shared/chart/chart-map/chart-map.component';


const routes: Routes = [
  { path: "", component: ChartMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
