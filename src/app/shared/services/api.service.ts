import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Player } from '../models/Player.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  // Player Methods
  getAllPlayers(): Observable<Player[]> {
    const url = `${this.baseUrl}/players`;
    return this.get(url);
  }

  getPlayer(id: string): Observable<Player> {
    const url = `${this.baseUrl}/players/${id}`;
    return this.get(url);
  }

  // Generic methods
  get(path: string, ): Observable<any> {
    return this.http.get(this.baseUrl + path, { headers: this.accessHeaders }).pipe(
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

  private get accessHeaders(): any {
    return {
      Authorization: `Bearer ${localStorage.getItem('bearer-token')}`
    };
  }

}
