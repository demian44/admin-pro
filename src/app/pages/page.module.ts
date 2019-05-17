import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficOneComponent } from './grafic-one/grafic-one.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    // PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraficOneComponent
  ],
  exports: [
    // PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraficOneComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PageModule { }
