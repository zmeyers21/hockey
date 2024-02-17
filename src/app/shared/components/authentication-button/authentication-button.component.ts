import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { tap } from 'rxjs';

@Component({
  selector: 'app-authentication-button',
  templateUrl: './authentication-button.component.html',
  styles: [],
})
export class AuthenticationButtonComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.isAuthenticated$.pipe(
      tap((res) => console.log('authenticated: ', res))
    ).subscribe();
  }
}
