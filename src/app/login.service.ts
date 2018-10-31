import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }
  
  login(userName:String, password:String)
  {
	return this.http.post<any>('https://pre-api.stafflinepro.com/v5/api/accounts/signin', {userName: userName, password: password})
		.pipe(map(user => { 
			if(user.code == 200)
			{
				localStorage.setItem('currentUser', JSON.stringify(user['content']['dataList'][0]));
			}
			return user;
		
		}))
  }
  
  logout()
  {
	localStorage.removeItem('currentUser');
	return true;
  }
  
  getUserProfile()
  {
	  return this.http.get<any>('https://pre-api.stafflinepro.com/v5/api/users')
		.pipe(map(user => { return user; }));
  }
}
