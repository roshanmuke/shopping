import { inject, TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RegisterService } from './register.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('RegisterService', () => {
  let service: RegisterService;
  let httpClient: HttpClient;
  let httpTestingController:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule ]

    });
    service = TestBed.inject(RegisterService);
      });

   

  it('should be created', inject([RegisterService], (sevice:RegisterService) => {
    expect(service).toBeTruthy();
  }));
});
