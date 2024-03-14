import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './core/modules/material.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { AddSessionComponent } from './components/add-session/add-session.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSessionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    AuthModule.forRoot({
      ...env.auth.clientId,
      ...env.auth.domain,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
