import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() {}

  sendFilters(filters: any): void {
    const endpoint = 'http://localhost:4200/ApiController';

    //return this.http.post(endpoint, filters).pipe(
      map((response: any) => {
        console.log('Filters sent successfully', response);
        return response;
      })
    //);
  }
}
