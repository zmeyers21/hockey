import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable, Subject, tap } from 'rxjs';
import { Division } from '../models/Division.model';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  private divisionsUpdatedSource: Subject<any> = new Subject<any>();
  updated$ = this.divisionsUpdatedSource.asObservable();

  constructor(private apiService: ApiService) { }

  getAll(): Observable<Division[]> {
    const path = `/divisions`;
    return this.apiService.get(path);
  }

  getOne(id: string): Observable<Division> {
    const path = `/divisions/${id}`;
    return this.apiService.get(path);
  }

  deleteOne(id: string): Observable<any> {
    const path = `/divisions/${id}`;
    return this.apiService.delete(path).pipe(
      tap(() => this.divisionsUpdatedSource.next(null))
    );
  }
}
