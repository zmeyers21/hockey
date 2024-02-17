import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Division } from '../models/Division.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Division Methods
  getAllDivisions(): Observable<Division[]> {
    const url = `${this.baseUrl}/divisions`;
    return this.get(url);
  }

  getDivision(id: string): Observable<Division> {
    const url = `${this.baseUrl}/divisions/${id}`;
    return this.get(url);
  }

  // Generic methods
  get(url: string, options?: any): Observable<any> {
    return this.http.get(url, options).pipe(
      catchError((err) => this.handleHttpError(err))
    );
  }

  post(url: string, payload: any,  options?: any): Observable<any> {
    return this.http.post(url, payload, options).pipe(
      catchError((err) => this.handleHttpError(err))
    );
  }

  put(url: string, payload: any,  options?: any): Observable<any> {
    return this.http.put(url, payload, options).pipe(
      catchError((err) => this.handleHttpError(err))
    );
  }

  // Handle http request errors
  handleHttpError(err: HttpErrorResponse): Observable<any> {
    if (err.status == 401 || err.status == 0) {
      // Unauthorized
    }
    return throwError(err);
  }

}
