import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable, map, from, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { Filters } from '../models/filters.model';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = "http://localhost:44317";
  private dicomControllerName = "Lesions";
  constructor(private http: HttpClient) {};

  postJson(filters: Filters | null): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    });

    return this.http.post(`${this.apiUrl}/${this.dicomControllerName}`, filters, { headers, responseType: 'blob' })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = "Unkown error occured";
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
