import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
