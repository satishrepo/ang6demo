import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError, retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from './_model/user';
import { StorageService } from './_service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient, private storageService : StorageService) { }
  
  login(userName:String, password:String):Observable<any>{
	return this.http.post<any>('https://pre-api.stafflinepro.com/v5/api/accounts/signin', {userName: userName, password: password})
		.pipe(tap(user => { 
			if(user.code == 200)
			{
				this.storageService.set('currentUser', user['content']['dataList'][0])
			}
			//return user;
		
		}))
  }
  
  logout() {
	localStorage.removeItem('currentUser');
	return true;
  }
  
  getUserProfile():Observable<any>{
	  return this.http.get<any>('https://pre-api.stafflinepro.com/v5/api/users')
		.pipe(
		tap(user => {  }),
		//retry(5)
		//catchError(error => {console.log('eeee',error); return {};})
		);
  }
  
  updatUserProfile(user):Observable<any> {
	  return this.http.put<any>('https://pre-api.stafflinepro.com/v5/api/users', user)
  }
  
  
}
