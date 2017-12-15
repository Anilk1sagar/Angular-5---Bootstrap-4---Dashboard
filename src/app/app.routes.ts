import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './user/login/login.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';

export const router: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'profile', component: UserProfileComponent},
    { path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}} //canActivate: [AuthGuard]
]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);