import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient,
    private loaderService: LoaderService) { }

  // Generic methods
  get(path: string): Observable<any> {
    const url = `${this.baseUrl}${path}`
    this.loaderService.on();
    return this.http.get(url, { headers: this.accessHeaders }).pipe(
      tap(() => this.loaderService.off()),
      catchError((err) => this.handleHttpError(err))
    );
  }

  post(path: string, payload: any,  options?: any): Observable<any> {
    const url = `${this.baseUrl}${path}`;
    this.loaderService.on();
    return this.http.post(url, payload, options).pipe(
      catchError((err) => this.handleHttpError(err))
    );
  }

  put(path: string, payload: any,  options?: any): Observable<any> {
    const url = `${this.baseUrl}${path}`
    return this.http.put(url, payload, options).pipe(
      catchError((err) => this.handleHttpError(err))
    );
  }

  delete(path: string): Observable<any> {
    const url = `${this.baseUrl}${path}`
    return this.http.delete(url).pipe(
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

  private get accessHeaders(): any {
    return {
      Authorization: `Bearer ${localStorage.getItem('bearer-token')}`
    };
  }

}
