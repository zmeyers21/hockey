import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Division } from 'src/app/shared/models/Division.model';
import { DivisionService } from 'src/app/shared/services/division.service';
import { HelperService } from 'src/app/shared/services/helper.service';

@Component({
  selector: 'app-division-list',
  templateUrl: './division-list.component.html',
  styleUrls: ['./division-list.component.scss']
})
export class DivisionListComponent implements OnInit {

  loading: boolean;
  divisions: {name: string, value: string}[] = [];

  constructor(private service: DivisionService,
    private helper: HelperService) { }

  ngOnInit(): void {
    this.loading = true;
    this.service.getAll().pipe(
      tap((res) => this.divisions = this.mapDivisions(res)),
      tap(() => this.loading = false)
    ).subscribe();
  }

  mapDivisions(divisions: Division[]): any {
    return divisions.sort((a, b) => this.helper.compare(a, b, 'city')).map(x => {
      return {
        name: this.getDivisionDisplay(x),
        value: x._id
      }
    })
  }

  getDivisionDisplay(division: Division): string {
    return `${division.city} - ${division.day} (${division.minRating}-${division.maxRating})`;
  }

  rowClick(id: string): void {
    console.log('id: ', id);
  }

}
