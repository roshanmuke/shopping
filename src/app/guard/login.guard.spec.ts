import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginGuard } from './login.guard';

describe('LoginGuard', () => {
  let guard: LoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ RouterTestingModule, HttpClientModule]
    });
    guard = TestBed.inject(LoginGuard);
   
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
