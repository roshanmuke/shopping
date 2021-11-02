import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[ HttpClientModule, RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  function loginFun(UserEmail, UserPassword) {
    component.loginForm.controls['username'].setValue(UserEmail);
    component.loginForm.controls['password'].setValue(UserPassword);
  }

  it(' should create', () => {
    expect(component).toBeTruthy();
  });

  it('component initial state', () => {
    expect(component.loginForm.valid).toBeDefined();
    expect(component.loginForm.invalid).toBeTruthy();
   
  });

  it('component Validators ', ()=>{


     });

  
  
});
