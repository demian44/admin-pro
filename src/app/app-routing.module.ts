import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraficOneComponent } from './pages/grafic-one/grafic-one.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children:
      [
        { path: 'progress', component: ProgressComponent },
        { path: 'graficOne', component: GraficOneComponent },
        { path: 'dashboard', component: DashboardComponent },
        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ]
})
export class AppRoutingModule { }
