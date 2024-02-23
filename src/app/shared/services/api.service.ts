import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Player } from '../models/Player.model';
import { LoaderService } from './loader.service';
import { DivisionPlayer } from '../models/DivisionPlayer.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient,
    private loaderService: LoaderService) { }

  // Player Methods
  getAllPlayers(): Observable<Player[]> {
    const url = `${this.baseUrl}/players`;
    return this.get(url);
  }

  getPlayer(id: string): Observable<Player> {
    const url = `${this.baseUrl}/players/${id}`;
    return this.get(url);
  }

  updatePlayer(player: DivisionPlayer): Observable<DivisionPlayer> {
    const url = `${this.baseUrl}/players/skills`;
    return this.put(url, player);
  }

  // Generic methods
  get(url: string): Observable<any> {
    this.loaderService.on();
    return this.http.get(url, { headers: this.accessHeaders }).pipe(
      tap(() => this.loaderService.off()),
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
