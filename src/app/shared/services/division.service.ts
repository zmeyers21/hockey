import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Division } from '../models/Division.model';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(private apiService: ApiService) { }

  getAll(): Observable<Division[]> {
    const path = `/divisions`;
    return this.apiService.get(path);
  }

  getOne(id: string): Observable<Division> {
    const path = `/divisions/${id}`;
    return this.apiService.get(path);
  }
}
