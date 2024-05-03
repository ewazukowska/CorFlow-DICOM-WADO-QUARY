// app.module.ts

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { QueryFormComponent } from './query-form/query-form.component';
import {routes} from "./app.routes";

@NgModule({
  declarations: [
    QueryFormComponent,

  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
