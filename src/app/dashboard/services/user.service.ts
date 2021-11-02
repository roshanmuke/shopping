import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getUser()
  {
    return this.httpClient.get("http://angular.pureecosoft.com/api/user/list");
  }
  
  editUser(id,form:FormGroup){
    let data ={
    User_ID: id,
    UserName: form.get("userName").value,
    UserEmail: form.get("userEmail").value,
    UserPassword: form.get("userPassword").value,
    UserRole: form.get("userRole").value,
    UserMobile: form.get("userMobile").value,
    UserDoB: form.get("userDOB").value,

    }
    return this.httpClient.post(
      "http://angular.pureecosoft.com/api/user/Update",
      data
    );
  }
  
  getUserById(id){
    
    return this.httpClient.get(
      `http://angular.pureecosoft.com/api/user/GetbyId?id=${id}`,);
  }

  deleteUser(id){

    return this.httpClient.post(`http://angular.pureecosoft.com/api/user/Delete?id=${id}`,"");
  }
}
