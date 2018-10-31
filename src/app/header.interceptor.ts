//import { Injectable } from '@angular/core';
import { HttpHeaders }  from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

//@Injectable()
export class AddHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Clone the request to add the new header
    //const clonedRequest = req.clone({ headers: req.headers.set('Authorization', 'Bearer 123') });
	
	let authCode = localStorage.getItem('currentUser') ? btoa('StaffLine@2017:'+JSON.parse(localStorage.getItem('currentUser')).userAuthToken) : 'U3RhZmZMaW5lQDIwMTc=';
	
    const clonedRequest = req.clone({ headers: new HttpHeaders({
			'Content-Type':  'application/json',
			'authorization': authCode,
			'deviceId': 'web-browser',
			'os': 'linux',
			'platform' : 'web',
		}) 
	});

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
}