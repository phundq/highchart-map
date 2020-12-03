import { HighChartsModule } from './shared/chart/highcharts.module';
import { MaterialCustomModule } from './shared/mat-custom/mat-custom.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialCustomModule,
    HighChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
