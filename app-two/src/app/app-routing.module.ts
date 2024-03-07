import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './prac-17/login/login.component';
import { DashboardComponent } from './prac-17/dashboard/dashboard.component';
import { LogoutComponent } from './prac-17/logout/logout.component';
import { AuthService } from './prac-17/auth.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthService],
  },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
