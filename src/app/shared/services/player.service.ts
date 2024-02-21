import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Player } from '../models/Player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private apiService: ApiService) { }

  getAll(): Observable<Player[]> {
    const path = `/players`;
    return this.apiService.get(path);
  }

  getOne(id: string): Observable<Player> {
    const path = `/players/${id}`;
    return this.apiService.get(path);
  }
}
