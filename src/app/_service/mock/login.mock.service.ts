import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceMock {
  constructor() { }

  login(userName:String, password:String): Observable<any> {
      return of({
		code:200,
		content: {messageList: [ { firstName : 'sam' }]}
		
	  });
	 
  }
}