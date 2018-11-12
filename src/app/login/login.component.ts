import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../_service/alert.service';
import { StorageService } from '../_service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
	private loginService : LoginService, 
	private alertService : AlertService,
	private storageService : StorageService,
	private router : Router
	) { }
  
  loginForm = new FormGroup({
	userName : new FormControl(''),
	password : new FormControl(''),
  });
  submitted = false;
  formError:any = [];

  ngOnInit() {
  }
  
  get f () {return this.loginForm.controls}
  
  onSubmit() {
	this.submitted = true;
	
	if(this.loginForm.invalid)
	{
		return false;
	}
	
	this.loginService.login(this.f.userName.value, this.f.password.value)
		.pipe(first())
		.subscribe( user => {
				if(user.code == 200)
				{
					this.storageService.set('currentUser', user['content']['dataList'][0]);
					this.alertService.success('Login successful', true);
					this.router.navigate(['dashboard'])
				}
				else
				{
					console.log(user.code);
					this.formError = user['content']['messageList']
				}
			},
			error => { 
				console.log('Error : ',error)
			});
	
	
  }

}
