// app.routes.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryFormComponent } from './query-form/query-form.component';
import {ResultComponent} from "./result/result.component";

export const routes: Routes = [
  { path: 'query-form', component: QueryFormComponent },
  { path: 'results', component: ResultComponent }
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  //exports: [RouterModule]
})
export class AppRoutingModule { }
