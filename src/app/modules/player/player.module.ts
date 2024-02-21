import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerRoutingModule } from './player-routing.module';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';

@NgModule({
  declarations: [
    PlayerComponent,
    PlayerListComponent,
    PlayerDetailsComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class PlayerModule { }
