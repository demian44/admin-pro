import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NopagefoundComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: false })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
