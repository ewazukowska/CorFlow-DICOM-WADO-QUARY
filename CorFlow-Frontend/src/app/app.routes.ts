// app.routes.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryFormComponent } from './query-form/query-form.component';
import {ResultComponent} from "./result/result.component";
import {FilterFormComponent} from "./filter-form/filter-form.component";

export const routes: Routes = [
  { path: 'query-form', component: QueryFormComponent },
  { path: 'results', component: ResultComponent },
  { path: 'filter-form', component: FilterFormComponent }
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  //exports: [RouterModule]
})
export class AppRoutingModule { }
