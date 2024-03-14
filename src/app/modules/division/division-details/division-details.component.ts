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
    public loaderService: LoaderService,
    private helper: HelperService) {
      super(loaderService);
    }

  ngOnInit(): void {
    this.loaderOn();
    this.sessionService.getAll().pipe(
      tap((res) => this.sessions$ = this.mapSessions(res)),
      tap(() => this.loaderOff())
    ).subscribe();

    this.subs.sink = this.sessionService.updated$.pipe(
      tap(() => this.loaderOn()),
      mergeMap(() => this.sessionService.getAll()),
      tap((res) => this.sessions$ = this.mapSessions(res)),
      tap(() => this.loaderOff())
    ).subscribe();

  }

  mapSessions(sessions: Session[]): Session[] {
    sessions.forEach(session => {
      console.log('formatted date: ', this.getFormattedString(session.startDate));
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

  getFormattedString(date: string): string {
    return this.helper.formatDateString(date);
  }

  close(): void {
    this.dialogRef.close();
  }

}
