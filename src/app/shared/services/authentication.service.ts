import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: AuthService) { }

  loadToken(): Observable<any> {
    return this.auth.getAccessTokenSilently().pipe(
      tap((res) => localStorage.setItem('bearer-token', res))
    );
  }

}
