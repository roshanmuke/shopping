import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { IRegistrationParam } from '../interface/registration';

@Injectable({
  providedIn: "root"
})
export class RegisterService {

  constructor(private httpClient:HttpClient) { }

  getRegistration(form: FormGroup) {
    let data: IRegistrationParam = {
      UserName: form.get("username").value,
      UserEmail: form.get("email").value,
      UserPassword: form.get("password").value,
      UserDOB: form.get("dob").value,
      UserMobile: form.get("number").value,
      UserRole: form.get("role").value,
    };
    return this.httpClient.post("http://angular.pureecosoft.com/api/user/Registration",data);
  }
}
