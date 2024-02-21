import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuard] },
  { path: 'divisions', loadChildren: () => import('./modules/division/division.module').then(m => m.DivisionModule), canActivate: [AuthGuard] },
  { path: 'players', loadChildren: () => import('./modules/player/player.module').then(m => m.PlayerModule), canActivate: [AuthGuard] },
  { path: 'draft', loadChildren: () => import('./modules/draft/draft.module').then(m => m.DraftModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
