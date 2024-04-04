import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs';
import { BaseWrapperDirective } from 'src/app/shared/directives/base-wrapper.directive';
import { Player } from 'src/app/shared/models/Player.model';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { HelperService } from 'src/app/shared/services/helper.service';
import { PlayerService } from 'src/app/shared/services/player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent extends BaseWrapperDirective implements OnInit {

  players: Player[] = [];
  displayedColumns: string[] = ['lastName', 'firstName', 'email', 'phone', 'actions'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new MatTableDataSource<Player>([]);

  constructor(private service: PlayerService,
    private helper: HelperService,
    private dialogService: DialogService) {
      super();
    }

  ngOnInit(): void {
    this.service.getAll().pipe(
      tap((res) => this.mapPlayers(res)),
      tap(() => this.dataSource.paginator = this.paginator)
    ).subscribe();
  }

  mapPlayers(players: Player[]): void {
    const sortedPlayers = players.sort((a, b) => this.helper.compare(a, b, 'lastName'));
    this.dataSource = new MatTableDataSource<Player>(sortedPlayers);
  }

  getFullName(player: Player): string {
    return `${player.lastName}, ${player.firstName}`;
  }

  rowClick(id: string): void {
    this.service.getOne(id).pipe(
      tap((res) => this.dialogService.playerDetails(res))
    ).subscribe();
  }

  viewPlayer(player: Player): void {
    alert('Coming Soon!');
  }

  editPlayer(player: Player): void {
    alert('Coming Soon!');
  }

  deletePlayer(player: Player): void {
    alert('Coming Soon!');
  }

}
