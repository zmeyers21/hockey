import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Player } from 'src/app/shared/models/Player.model';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PlayerDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public player: Player) { }

  ngOnInit(): void {
    
  }

}
