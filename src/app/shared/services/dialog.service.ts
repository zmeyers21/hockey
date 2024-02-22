import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Player } from '../models/Player.model';
import { PlayerDetailsComponent } from 'src/app/modules/player/player-details/player-details.component';
import { DivisionDetailsComponent } from 'src/app/modules/division/division-details/division-details.component';
import { Division } from '../models/Division.model';

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

  divisionDetails(division: Division): void {
    this.dialog.open(DivisionDetailsComponent, {
      width: '90%',
      height: '90%',
      data: division,
      disableClose: true
    });
  }

}
