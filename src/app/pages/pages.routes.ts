import { Routes, RouterModule } from '@angular/router';

// Components
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficOneComponent } from './grafic-one/grafic-one.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children:
            [
                { path: 'progress', component: ProgressComponent },
                { path: 'graficOne', component: GraficOneComponent },
                { path: 'dashboard', component: DashboardComponent },
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