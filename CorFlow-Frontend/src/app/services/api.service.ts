import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Filters } from '../models/filters.model';
import { Lesion } from '../models/lesions.model';

@Injectable({
  providedIn: 'root'

})

export class ApiService {
  //private apiUrl = "http://localhost:5021";
  private dummyEndpoint = "api/dummy/lesions";

  constructor(private http: HttpClient) {}


  getLesion(filters: Filters | null): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return this.http.get<Lesion[]>(`${this.dummyEndpoint}`, { headers }) // now we have proxy file configuration
      .pipe(
        catchError(this.handleError)
      );
  }
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = "Unknown error occurred";
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
      console.log("Client-side error");
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.log("Server-side error");
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
