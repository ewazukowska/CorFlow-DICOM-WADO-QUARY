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
import {ApiService} from "./filter-form/api.service";


@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    QueryFormComponent,
    HomeComponent,
    ResultComponent,
    CommonModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [ApiService]
})
export class AppModule { }
