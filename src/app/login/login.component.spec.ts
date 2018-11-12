import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By} from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginService } from '../login.service';
import { LoginServiceMock } from '../_service/mock/login.mock.service';
import { AlertService } from '../_service/alert.service';
import { Router }       from '@angular/router';
import { AlertServiceMock } from '../_service/mock/alert.mock.service';

fdescribe('LoginComponent', () => {
  let comp: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de : DebugElement;
  let el : HTMLElement;
 
  beforeEach(async(() => {
	const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
	  imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule
	  ],
	  providers : [
		{ provide : LoginService, useClass: LoginServiceMock },
		{ provide : AlertService, useClass: AlertServiceMock},
		{ provide: Router, useValue: routerSpy}
	  ]
    })
    .compileComponents().then(() => { 
			fixture = TestBed.createComponent(LoginComponent); 
			comp = fixture.componentInstance; 
			de = fixture.debugElement.query(By.css('form'));
			el = de.nativeElement;	
			//fixture.detectChanges();
			
		});
  }));

  /*
  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
	*/
  it('should set submitted true, and api code 200', async(() => { 
	comp.onSubmit();
    expect(comp.submitted).toBeTruthy()
	expect(comp.loginService.login().value.code).toEqual(200);
  }));
  
  it('should return single user', async(() => { 
  	expect(comp.loginService.login().value.content.messageList.length).toEqual(1);
  }));
  
});



