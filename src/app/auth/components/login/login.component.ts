import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { IRegistrationRes } from '../../interface/registration';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;
  username;
  password;
  constructor(private loginService: LoginService, private storageService: StorageService, private router: Router) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

  }

  loginFun() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      return;
    }
    this.loginService.getLogin(this.loginForm).subscribe(
      (response: IRegistrationRes) => {
        console.log(response);
        if (response.Status) {
          this.storageService.setUser(response.Data);
          this.router.navigate(["/dashboard/dashboard"]);
        } else {
          alert(response.Message);
        }
      },
      (error) => {
        console.log(error);
      }
    )
    console.log(this.loginForm);
  }
  clearFun() {
    this.loginForm.reset();
  }



}