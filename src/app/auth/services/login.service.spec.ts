import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { LoginService } from './login.service';
import { FormGroup } from '@angular/forms';

describe('LoginService', () => {
  let loginService: LoginService;
  let httpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],


    });
    loginService = TestBed.inject(LoginService);
      });

  it('should be created', () => {
    expect(loginService).toBeTruthy();
  });

 
});