// app.module.ts

import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from "./home/home.component";
import { QueryFormComponent } from './query-form/query-form.component';
import { ResultComponent } from "./result/result.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from "./services/api.service";
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { HistogramComponent } from './histogram/histogram.component';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QueryFormComponent,
    ResultComponent,
    FilterFormComponent,
    HistogramComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    CommonModule,
    NgxSliderModule,
    HttpClientModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
