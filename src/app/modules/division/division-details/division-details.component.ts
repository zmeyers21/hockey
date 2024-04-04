import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { mergeMap, tap } from 'rxjs';
import { BaseWrapperDirective } from 'src/app/shared/directives/base-wrapper.directive';
import { SessionStatus } from 'src/app/shared/enums/SessionStatus.enum';
import { Division } from 'src/app/shared/models/Division.model';
import { Session } from 'src/app/shared/models/Session.model';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { DivisionService } from 'src/app/shared/services/division.service';
import { HelperService } from 'src/app/shared/services/helper.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { SessionService } from 'src/app/shared/services/session.service';

@Component({
  selector: 'app-division-details',
  templateUrl: './division-details.component.html',
  styleUrls: ['./division-details.component.scss']
})
export class DivisionDetailsComponent extends BaseWrapperDirective implements OnInit {

  sessions$: Session[] = [];

  constructor(private dialogRef: MatDialogRef<DivisionDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public division: Division,
    private service: DivisionService,
    private dialogService: DialogService,
    private sessionService: SessionService,
    public loader: LoaderService,
    private helper: HelperService) {
      super();
    }

  ngOnInit(): void {
    this.loader.on();
    this.sessionService.getAll().pipe(
      tap((res) => this.sessions$ = this.mapSessions(res)),
      tap(() => this.loader.off())
    ).subscribe();

    this.subs.sink = this.sessionService.updated$.pipe(
      tap(() => this.loader.on()),
      mergeMap(() => this.sessionService.getAll()),
      tap((res) => this.sessions$ = this.mapSessions(res)),
      tap(() => this.loader.off())
    ).subscribe();

  }

  mapSessions(sessions: Session[]): Session[] {
    sessions.forEach(session => {
      session.startDate = this.getFormattedString(session.startDate);
    });
    return sessions;
  }

  delete(): void {
    this.service.deleteOne(this.division._id).pipe(
      tap(() => this.close())
    ).subscribe();
  }

  addSession(): void {
    const session: Session = new Session(this.division, SessionStatus.NEW);
    this.dialogService.addSession(session);
  }

  editSession(session: Session): void {
    this.dialogService.addSession(session);
  }

  viewSession(session: Session): void {
    
  }

  deleteSession(session: Session): void {
    if (session._id && session.status == SessionStatus.NEW) {
      this.sessionService.deleteOne(session._id).subscribe();
    } else {
      alert('You probably don\'t want to do that...');
    }
  }

  getFormattedString(date: string): string {
    return this.helper.formatDateString(date);
  }

  close(): void {
    this.dialogRef.close();
  }

}
