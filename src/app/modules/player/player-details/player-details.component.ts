import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { take, tap } from 'rxjs';
import { DivisionPlayer } from 'src/app/shared/models/DivisionPlayer.model';
import { NameValue } from 'src/app/shared/models/NameValue.model';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { PlayerService } from 'src/app/shared/services/player.service';
import { RatingService } from 'src/app/shared/services/rating.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {

  min: number = 0;
  max: number = 6;
  step: number = .5;
  showTicks: boolean = false;
  fields: NameValue[];

  constructor(private dialogRef: MatDialogRef<PlayerDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public player: DivisionPlayer,
    private service: PlayerService,
    private ratingService: RatingService,
    private loader: LoaderService) { }

  ngOnInit(): void {
    // const rating: number = this.ratingService.getOverallRating()
    console.log('player: ', this.player);

    if (this.player.skills == null) {
      this.loader.on();
      this.addDefaultSkills();
    }

    this.fields = Object.keys(this.player.skills).map(x => {
      return {
        name: this.getDisplayFromSkillKey(x),
        value: x
      }
    });

    console.log('overall rating: ', this.ratingService.getOverallRating(this.player));
  }

  getDisplayFromSkillKey(key: string): string {
    switch (key) {
      case 'offAware':
        return 'offensive awareness';
      case 'defAware':
        return 'defensive awareness';
      case 'shotPower':
        return 'shot power';
      case 'shotAccuracy':
        return 'shot accuracy';
      case 'stickHandling':
        return 'stick handling';
      case 'xFactor':
        return 'x factor'
      default:
        return key.toLowerCase();
    }
  }

  addDefaultSkills(): void {
    this.player.skills = structuredClone(this.ratingService.defaultSkills);
    this.service.updateOne(this.player).pipe(
      take(1),
      tap(() => this.loader.off())
    ).subscribe();
  }

  save(): void {
    this.service.updateOne(this.player).pipe(
      tap((res) => console.log('response: ', res)),
      tap(() => this.dialogRef.close())
    ).subscribe();
  }

  close(): void {
    this.dialogRef.close();
  }

}
