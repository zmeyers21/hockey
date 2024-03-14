import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { ApiService } from './api.service';
import { Session } from '../models/Session.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private sessionsUpdated: Subject<any> = new Subject<any>();
  updated$ = this.sessionsUpdated.asObservable();

  constructor(private apiService: ApiService) { }

  getAll(): Observable<Session[]> {
    const path = '/sessions';
    return this.apiService.get(path);
  }

  getOne(id: string): Observable<Session> {
    const path = `/sessions/${id}`;
    return this.apiService.get(path);
  }

  add(session: Session): Observable<any> {
    const path = '/sessions';
    return this.apiService.post(path, session).pipe(
      tap(() => this.sessionsUpdated.next(null))
    );
  }

}
