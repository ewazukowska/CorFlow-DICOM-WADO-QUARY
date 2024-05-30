// app.routes.ts

import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { QueryFormComponent } from './query-form/query-form.component';
import {ResultComponent} from "./result/result.component";
import {FilterFormComponent} from "./filter-form/filter-form.component";

export const routes: Routes = [
  { path: 'query-form', component: QueryFormComponent },
  { path: 'results', component: ResultComponent },
  { path: 'filter-form', component: FilterFormComponent }
];
export class AppRoutingModule { }
