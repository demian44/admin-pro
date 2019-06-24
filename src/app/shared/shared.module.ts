import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { BreadcrumsComponent } from './breadcrums/breadcrums.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    AppRoutingModule,
    RouterModule,
    CommonModule
  ],
  declarations: [
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    NopagefoundComponent,
  ],
  exports: [
    NopagefoundComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumsComponent,
    NopagefoundComponent
  ]
})
export class SharedModule { }
