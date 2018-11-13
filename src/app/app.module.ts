import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddHeaderInterceptor } from './header.interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AlertComponent } from './_directive/alert/alert.component';
import { HeaderComponent } from './_layout/postlogin/header/header.component';
import { FooterComponent } from './_layout/postlogin/footer/footer.component';
import { LayoutComponent } from './_layout/postlogin/layout/layout.component';

import { ProjectModule } from './project/project.module';
import { ScrollComponent } from './_directive/scroll/scroll.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UserProfileComponent,
    AlertComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	ReactiveFormsModule,
	FormsModule,
	HttpClientModule,
	ProjectModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AddHeaderInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
