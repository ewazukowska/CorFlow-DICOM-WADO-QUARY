// filter-form.component.ts

import {Component, HostListener} from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  styleUrls: ['./query-form.component.scss']
})


export class QueryFormComponent {
  constructor(public router: Router) { }


  @HostListener('document:keydown.enter', ['$event'])
  handleEnterKey(event: KeyboardEvent) {
    console.log('Wciśnięto klawisz Enter');
    this.submitQuery();
  }

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

  filterQuery() {
    this.router.navigate(['results']).then((success) => {
      if (success) {
        console.log('Navigated to results successfully!');
      } else {
        console.log('Navigation failed!');
      }
    });
  }

}
