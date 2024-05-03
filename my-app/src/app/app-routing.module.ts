import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QueryFormComponent } from './query-form/query-form.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'query-form', component: QueryFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
