import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { first }  from 'rxjs/operators';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private router : Router, private loginService : LoginService) { }

  profile =  {};
  
  ngOnInit() {
	this.getProfile();
  }
  
  getProfile() {
	  
	this.loginService.getUserProfile()
		.pipe(first())
		.subscribe( user => { 
			if(user.code == 200)
				this.profile = user.content.dataList[0];
			else
				console.log('error',user)
		},
		error => {
			console.log(error)
		})
	  
  }

}
