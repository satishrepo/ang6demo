import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentComponent } from './current/current.component';
import { PastComponent } from './past/past.component';
import { LayoutComponent } from '../_layout/postlogin/layout/layout.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard }  from '../auth.guard';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, 
         MatSortModule, MatTableModule } from "@angular/material";
		 
import { NgxPaginationModule } from 'ngx-pagination';

const projectRoutes : Routes = [
	{
		path : '', component : LayoutComponent, canActivate : [AuthGuard], children : [
			{path : 'project/current', component : CurrentComponent},
			{path : 'project/past', component : PastComponent}
		]
	}
]

@NgModule({
  imports: [
    CommonModule, 
	RouterModule.forChild(projectRoutes),
	MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule,
	NgxPaginationModule
  ],
  declarations: [CurrentComponent, PastComponent],
  //exports : [RouterModule]
})
export class ProjectModule { }
