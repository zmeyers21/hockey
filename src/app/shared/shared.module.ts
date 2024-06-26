import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginButtonComponent } from './components/auth/login-button/login-button.component';
import { LogoutButtonComponent } from './components/auth/logout-button/logout-button.component';
import { AuthenticationButtonComponent } from './components/auth/authentication-button/authentication-button.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthNavComponent } from './components/auth/auth-nav/auth-nav.component';
import { MaterialModule } from '../core/modules/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    NavBarComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    AuthenticationButtonComponent,
    AuthNavComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
