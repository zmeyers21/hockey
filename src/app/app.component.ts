import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './shared/services/authentication.service';
import { BaseWrapperDirective } from './shared/directives/base-wrapper.directive';
import { LoaderService } from './shared/services/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent extends BaseWrapperDirective implements OnInit {

  constructor(private authService: AuthenticationService,
    public loaderService: LoaderService) {
      super(loaderService);
    }

  ngOnInit(): void {
    this.authService.loadToken();
  }

}
