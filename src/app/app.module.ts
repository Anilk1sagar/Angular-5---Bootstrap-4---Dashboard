import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BootstrapModule } from './modules/bootstrap.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './ui/dashboard/dashboard.component';
import { LoginComponent } from './user/login/login.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';

export const firebaseConfig = {
	production: false,
	apiKey: "AIzaSyCKwNNXWP3TcMmMZDA2YfPUqfzuvbwuwGQ",
    authDomain: "dashboard-cf2bd.firebaseapp.com",
    databaseURL: "https://dashboard-cf2bd.firebaseio.com",
    projectId: "dashboard-cf2bd",
    storageBucket: "dashboard-cf2bd.appspot.com",
    messagingSenderId: "320560185734"
};


@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		SidebarComponent,
		FooterComponent,
		DashboardComponent,
		LoginComponent,
		UserProfileComponent
	],
	imports: [
		BrowserModule,
		BootstrapModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireAuthModule,
		AngularFirestoreModule,
		routes
	],
	providers: [AuthService, AuthGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
