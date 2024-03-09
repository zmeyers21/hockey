import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { Division } from 'src/app/shared/models/Division.model';
import { DivisionService } from 'src/app/shared/services/division.service';
import { LoaderService } from 'src/app/shared/services/loader.service';

@Component({
  selector: 'app-division-details',
  templateUrl: './division-details.component.html',
  styleUrls: ['./division-details.component.scss']
})
export class DivisionDetailsComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DivisionDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public division: Division,
    private service: DivisionService,
    private loader: LoaderService) { }

  ngOnInit(): void {
    console.log('division', this.division);
  }

  delete(): void {
    this.service.deleteOne(this.division._id).pipe(
      tap(() => this.close())
    ).subscribe();
  }

  close(): void {
    this.dialogRef.close();
  }

}
