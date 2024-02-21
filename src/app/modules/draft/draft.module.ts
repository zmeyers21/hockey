import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DraftComponent } from './draft.component';
import { DraftRoutingModule } from './draft-routing.module';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DraftListComponent } from './draft-list/draft-list.component';
import { DraftDetailsComponent } from './draft-details/draft-details.component';



@NgModule({
  declarations: [
    DraftComponent,
    DraftListComponent,
    DraftDetailsComponent
  ],
  imports: [
    CommonModule,
    DraftRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class DraftModule { }
