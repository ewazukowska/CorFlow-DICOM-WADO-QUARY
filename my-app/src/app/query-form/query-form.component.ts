// query-form.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-query-form',
  templateUrl: './query-form.component.html',
  standalone: true,
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent {
  query: string = '';

  submitQuery() {
    // Tutaj możesz dodać logikę obsługi zapytania, np. wysłanie go do serwera
    console.log('Wprowadzone zapytanie:', this.query);
  }
}
