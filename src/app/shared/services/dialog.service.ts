import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Player } from '../models/Player.model';
import { PlayerDetailsComponent } from 'src/app/modules/player/player-details/player-details.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) { }

  playerDetails(player: Player): void {
    this.dialog.open(PlayerDetailsComponent, {
      width: '90%',
      height: '90%',
      data: player,
      disableClose: true
    });
  }

}
