// Router classes
import { Routes, RouterModule } from '@angular/router';

// Components
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficOneComponent } from './graphic-one/graphic-one.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { ObservableExampleComponent } from './observable-example/observable-example.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children:
      [
        { path: 'progress', component: ProgressComponent, data: { title: "Progress" } },
        { path: 'graphic-one', component: GraficOneComponent , data: { title: "Grafics" } },
        { path: 'dashboard', component: DashboardComponent , data: { title: "Dashboard" } },
        { path: 'promises', component: PromisesComponent , data: { title: "Promises" } },
        { path: 'account-settings', component: AccountSettingsComponent , data: { title: "Account Settings" } },
        { path: 'rxjs', component: RxjsComponent , data: { title: "Rxjs Components" } },
        { path: 'ovservable-example', component: ObservableExampleComponent , data: { title: "Observable's examples" } },
        { path: '', redirectTo: 'dashboard', pathMatch: 'full' , data: { title: "Dashboard" } },
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
