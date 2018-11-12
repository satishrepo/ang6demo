import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertServiceMock {
    private subject = new Subject<any>();
    private keepAfterNavigationChange = false;

    

    success(message: string, keepAfterNavigationChange = false) {
        //this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: 'test message success' });
    }

    error(message: string, keepAfterNavigationChange = false) {
        //this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: 'test message failure' });
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
