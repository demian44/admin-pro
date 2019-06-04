// Router classes
import { Routes, RouterModule } from '@angular/router';

// Components
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficOneComponent } from './graphic-one/graphic-one.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children:
      [
        { path: 'progress', component: ProgressComponent },
        { path: 'graphicOne', component: GraficOneComponent },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'account-settings', component: AccountSettingsComponent },
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CHILD_ROUTES { }