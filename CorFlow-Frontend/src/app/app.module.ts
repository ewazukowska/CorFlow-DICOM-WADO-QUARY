// app.module.ts

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from "./home/home.component";
import { QueryFormComponent } from './query-form/query-form.component';
import { ResultComponent } from "./result/result.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from "./filter-form/api.service";
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [

  ],
  exports: [],
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule,
    NgxSliderModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    HomeComponent,
    QueryFormComponent,
    ResultComponent,
    FilterFormComponent
  ],
  providers: [
    ApiService
  ]
})

export class AppModule { }
