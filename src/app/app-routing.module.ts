import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'; 
import { DashboardComponent} from './dashboard/dashboard.component'; 
import { UserProfileComponent} from './user-profile/user-profile.component'; 
import { LayoutComponent} from './_layout/postlogin/layout/layout.component'; 
import { AuthGuard }  from './auth.guard';

const routes: Routes = [
	{path : 'login', component : LoginComponent},
	//{path : 'dashboard', component : DashboardComponent, canActivate : [AuthGuard], children : [
	//	{path : 'profile', component : UserProfileComponent}
	//]}
	{path : '', component : LayoutComponent, canActivate : [AuthGuard], children : [
		{path : 'dashboard', component : DashboardComponent},
		{path : 'profile', component : UserProfileComponent},
	]}
	
	];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
