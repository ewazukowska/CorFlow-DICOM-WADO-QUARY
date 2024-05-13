// app.module.ts

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent }  from './app.component';
import { HomeComponent } from "./home/home.component";
import { QueryFormComponent } from './query-form/query-form.component';
import {routes} from "./app.routes";

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    QueryFormComponent,
    HomeComponent
  ],
  exports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: []
})
export class AppModule { }
