import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { BaseWrapperDirective } from 'src/app/shared/directives/base-wrapper.directive';
import { Division } from 'src/app/shared/models/Division.model';
import { NameValue } from 'src/app/shared/models/NameValue.model';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { DivisionService } from 'src/app/shared/services/division.service';
import { HelperService } from 'src/app/shared/services/helper.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-division-list',
  templateUrl: './division-list.component.html',
  styleUrls: ['./division-list.component.scss']
})
export class DivisionListComponent extends BaseWrapperDirective implements OnInit {

  divisions: NameValue[] = [];

  constructor(private service: DivisionService,
    private helper: HelperService,
    public loader: LoaderService,
    private dialogService: DialogService) {
      super()
    }

  ngOnInit(): void {
    this.loadDivisions();

    this.subs.sink = this.service.updated$.pipe(
      tap(() => this.loadDivisions())
    ).subscribe();
  }

  loadDivisions(): void {
    this.service.getAll().pipe(
      tap((res) => this.divisions = this.mapDivisions(res))
    ).subscribe();
  }

  mapDivisions(divisions: Division[]): NameValue[] {
    return divisions.sort((a, b) => this.helper.compare(a, b, 'city')).map(x => {
      return {
        name: this.getDivisionDisplay(x),
        value: x._id
      }
    })
  }

  getDivisionDisplay(division: Division): string {
    return `${division.city} - ${division.dayOfWeek} (${division.minRating}-${division.maxRating})`;
  }

  rowClick(id: string): void {
    this.service.getOne(id).pipe(
      tap((res) => this.dialogService.divisionDetails(res))
    ).subscribe();
  }

}
