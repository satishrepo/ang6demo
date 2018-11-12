import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { first }  from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../_model/user';
import { StorageService } from '../_service/storage.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(
	private router : Router, 
	private loginService : LoginService,
	private formBuilder : FormBuilder,
	private storageService : StorageService
	) { }

  profile :  User;
  profileForm : FormGroup;
  
  ngOnInit() {
	this.getProfile();
	this.profileForm = this.formBuilder.group({
		firstName : ['', Validators.required],
		lastName  : ['', Validators.required]
	});
  }
  
  get f() {return this.profileForm.controls; }
  
  getProfile() {
	  
	this.loginService.getUserProfile()
		.pipe(first())
		.subscribe( user => { 
			if(user.code == 200)
				this.profile = user.content.dataList[0].empDetails;
			else
				console.log('error',user)
		},
		error => {
			console.log(error)
		})
	  
  }
  
  updateUser() {
	  let userData = {empDetails : this.profileForm.value};
	  this.loginService.updatUserProfile(userData)
		.pipe(first())
		.subscribe( user => { 
			//this.getProfile();
			this.profile.firstName = this.f.firstName.value;
			this.profile.lastName = this.f.lastName.value;
			let _u = JSON.parse(localStorage.getItem('currentUser'));
			_u.firstName = this.f.firstName.value;
			_u.lastName = this.f.lastName.value;
			//localStorage.setItem('currentUser', JSON.stringify(_u));
			this.storageService.set('currentUser', _u)
		},
		error=> {
			console.log(error)
		})
  }

}
