import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
    private subject = new Subject<any>();
   
    constructor() {
        
    }

    set(key : string, data : any) {
        localStorage.setItem(key, JSON.stringify(data));
        this.subject.next(data);
    }
	
	get(key : string) {
		let _u = JSON.parse(localStorage.getItem(key));
        this.subject.next(_u);
    }

    remove(key : string) {
        localStorage.removeItem(key);
        this.subject.next('storage updated');
    }

    watchStorage(): Observable<any> {
        return this.subject.asObservable();
    }
}
