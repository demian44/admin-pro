import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficOneComponent } from './grafic-one/grafic-one.component';
import { PagesComponent } from './pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { CHILD_ROUTES } from './pages.routes';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    GraficOneComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraficOneComponent,
  ],
  imports: [
    CHILD_ROUTES,
    AppRoutingModule,
    SharedModule,
  ]
})
export class PageModule { }
