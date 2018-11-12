import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../login.service';
import { StorageService } from '../../../_service/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
	private loginService : LoginService, 
	private storageService : StorageService, 
	private router : Router
	) { }
  user : any = {};
  
  ngOnInit() {
	  this.getUser();
  }
  
  getUser() {
	this.storageService.watchStorage().subscribe( user => { 
		this.user = user; 
	});
  }
  
  logout() { 
	if(this.loginService.logout())
		this.router.navigate(['login']);
  }

}
