import { AfterContentInit, Component, OnInit } from '@angular/core';
import { AuthenticationService } from './shared/services/authentication.service';
import { BaseWrapperDirective } from './shared/directives/base-wrapper.directive';
import { LoaderService } from './shared/services/loader.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseWrapperDirective implements OnInit, AfterContentInit {

  loading: boolean = false;

  constructor(private authService: AuthenticationService,
    public loaderService: LoaderService) {
      super(loaderService);
    }

  ngOnInit(): void {

    this.subs.sink = this.loaderService.loading$.pipe(
      tap((loading) => console.log('loading: ', loading)),
      tap((loading) => this.loading = loading)
    ).subscribe();

  }

  ngAfterContentInit(): void {
    this.loaderOn();
    this.authService.loadToken().pipe(
      tap(() => this.loaderOff())
    ).subscribe();
  }

}
