import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";
import { ApiService } from '../services/api.service';
import { Filters } from '../models/filters.model';

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
  public filters: Filters = {
    frames: 0,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    dominance: '',
    sex: '',
    occlusionAge: 0,
    occlusionLength: 0
  };

  constructor(private router: Router, private apiService: ApiService) { }

  @HostListener('document:keydown.enter', ['$event'])
  handleEnterKey(event: KeyboardEvent): void {
    console.log('Enter key pressed');
    this.submitQuery();
  }

  public submitQuery(): void {
    this.apiService.postJson(this.filters).subscribe({
      next: (results) => {
        console.log('Search results:', results);
        this.navigateToResults();
      },
      error: (error) => {
        console.error('Search failed:', error);
      }
    });
  }

  private navigateToResults(): void {
    this.router.navigate(['results']).then((success) => {
      if (success) {
        console.log('Navigated to results successfully!');
      } else {
        console.log('Navigation failed!');
      }
    });
  }
}
