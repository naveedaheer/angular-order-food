import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root',
})
export class WebApiService {

  private baseUrl = environment.apiURL;

  constructor(private http: HttpClient) {
  }

  get<T>(url: string) {
    return this.http.get<T>(this.baseUrl + url, httpOptions)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  post<T>(url: string, dto: T) {
    return this.http.post<T>(this.baseUrl + url, dto, httpOptions)
      .pipe(
        catchError(this.handleError) // then handle the error
      );
  }

  delete<T>(url: string) {
    return this.http.delete<T>(this.baseUrl + url, httpOptions)
      .pipe(
        catchError(this.handleError) // then handle the error
      );
  }

  put<T>(url: string, dto: T) {
    return this.http.put<T>(this.baseUrl + url, dto, httpOptions)
      .pipe(
        catchError(this.handleError) // then handle the error
      );
  }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
