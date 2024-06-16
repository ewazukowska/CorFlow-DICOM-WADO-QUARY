// app.module.ts

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { HomeComponent } from "./home/home.component";
import { QueryFormComponent } from './query-form/query-form.component';
import { ResultComponent } from "./result/result.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FilterFormComponent } from './filter-form/filter-form.component';

@NgModule({
  declarations: [
    HomeComponent,
    QueryFormComponent,
    ResultComponent,
    FilterFormComponent
  ],
  exports: [],
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule,
    NgxSliderModule,
    HttpClientModule
  ],
  providers: [
  ]
})

export class AppModule { }
