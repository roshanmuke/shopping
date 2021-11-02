import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  getLogin(form: FormGroup){
    let data={UserEmail:form.value.username,UserPassword:form.value.password}
    return this.httpClient.post('http://angular.pureecosoft.com/api/user/Login',data)
  }}
