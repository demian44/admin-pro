// Modules
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PageModule } from './pages/page.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ServiceModule } from "./services/service.module";

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// Services
import { SidebarService } from './services/service.index';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    PageModule,
    RouterModule,
    AppRoutingModule,
    ServiceModule
  ],
  providers: [SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule 
{
}