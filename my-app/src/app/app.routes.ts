// app.routes.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QueryFormComponent } from './query-form/query-form.component';

export const routes: Routes = [
  { path: 'query-form', component: QueryFormComponent }
];

@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  //exports: [RouterModule]
})
export class AppRoutingModule { }
