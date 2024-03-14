import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { Session } from 'src/app/shared/models/Session.model';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss']
})
export class AddSessionComponent implements OnInit {

  teamCount: number;

  constructor(private dialogRef: MatDialogRef<AddSessionComponent>,
    @Inject(MAT_DIALOG_DATA) public session: Session,
    private service: SessionService) { }

  ngOnInit(): void {
    console.log('session: ', this.session);
  }

  save(): void {
    console.log('session: ', this.session);
    this.service.add(this.session).pipe(
      tap(() => this.close())
    ).subscribe();
  }

  close(): void {
    this.dialogRef.close();
  }

}
