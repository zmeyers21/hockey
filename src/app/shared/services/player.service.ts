import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Player } from '../models/Player.model';
import { DivisionPlayer } from '../models/DivisionPlayer.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private apiService: ApiService) { }

  getAll(): Observable<Player[]> {
    return this.apiService.getAllPlayers();
  }

  getOne(id: string): Observable<Player> {
    return this.apiService.getPlayer(id);
  }

  updateOne(player: DivisionPlayer): Observable<any> {
    return this.apiService.updatePlayer(player);
  }
}
