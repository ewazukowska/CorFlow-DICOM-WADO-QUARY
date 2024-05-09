// query-form.component.ts

import { Component } from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent {
  constructor(public router: Router) { }
  query: string = '';

  submitQuery() {
    this.router.navigate(['results']).then((success) => {
      if (success) {
        console.log('Navigated to results successfully!');
      } else {
        console.log('Navigation failed!');
      }
    });
  }
}
