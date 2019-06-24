// Modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { ChartsModule } from 'ng2-charts';

// Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficOneComponent } from './graphic-one/graphic-one.component';
import { PagesComponent } from './pages.component';
import { AumentatorComponent } from '../components/aumentator/aumentator.component';
import { DonutGraphicComponent } from '../components/donut-graphic/donut-graphic.component';

// Routing
import { CHILD_ROUTES } from './pages.routes';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    DonutGraphicComponent,
    GraficOneComponent,
    AumentatorComponent,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent,
    ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    DonutGraphicComponent,
    GraficOneComponent,
  ],
  imports: [
    CHILD_ROUTES,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ChartsModule,
    BrowserModule
  ]
})
export class PageModule { }
