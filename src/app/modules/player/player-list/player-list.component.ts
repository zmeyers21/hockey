import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { BaseWrapperDirective } from 'src/app/shared/directives/base-wrapper.directive';
import { NameValue } from 'src/app/shared/models/NameValue.model';
import { Player } from 'src/app/shared/models/Player.model';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { HelperService } from 'src/app/shared/services/helper.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent extends BaseWrapperDirective implements OnInit {

  players: NameValue[] = [];

  constructor(private service: PlayerService,
    private helper: HelperService,
    private dialogService: DialogService,
    public loaderService: LoaderService) {
      super(loaderService)
    }

  ngOnInit(): void {
    this.service.getAll().pipe(
      tap((res) => this.players = this.mapPlayers(res))
    ).subscribe();
  }

  mapPlayers(players: Player[]): NameValue[] {
    return players.sort((a, b) => this.helper.compare(a, b, 'lastName')).map(x => {
      return {
        name: this.getFullName(x),
        value: x._id
      }
    })
  }

  getFullName(player: Player): string {
    return `${player.lastName}, ${player.firstName}`;
  }

  rowClick(id: string): void {
    this.service.getOne(id).pipe(
      tap((res) => this.dialogService.playerDetails(res))
    ).subscribe();
  }

}
