import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivisionComponent } from './division.component';
import { DivisionRoutingModule } from './division-routing.module';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DivisionListComponent } from './division-list/division-list.component';
import { DivisionDetailsComponent } from './division-details/division-details.component';

@NgModule({
  declarations: [
    DivisionComponent,
    DivisionListComponent,
    DivisionDetailsComponent
  ],
  imports: [
    CommonModule,
    DivisionRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class DivisionModule { }
