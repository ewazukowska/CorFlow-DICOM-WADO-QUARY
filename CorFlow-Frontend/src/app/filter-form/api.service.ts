import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:4200';
  constructor(private http: HttpClient) {}

  sendFilters(filters: any): void {
    const endpoint = `${this.apiUrl}/api/data/`;

    this.http.post(endpoint, filters).subscribe(
      (response) => {
        console.log('Sukces:', response);
        // Obsłuż otrzymane dane tutaj
      },
      (error) => {
        console.error('Błąd:', error);
        // Obsłuż błędy tutaj
      }
    );
  }
}
