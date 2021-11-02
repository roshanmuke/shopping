import { Component, OnInit } from '@angular/core';
import { FormGroup ,NgForm, FormControl , Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import { confirmPasswordValidator } from '../../validators/confirmPasswordValidator';
import { IRegistrationRes } from "../../interface/registration";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  registerForm:FormGroup;

  errorMessage: string = "";

  apiFlag: boolean = false;
  apiSpinner: boolean = false;
  apiSuccess: boolean = false;
  constructor(private registerService:RegisterService, private router:Router) { }

  ngOnInit(): void {
    this.registerForm= new FormGroup({
      username: new FormControl('', [Validators.required , Validators.minLength(4)]),
      password: new FormControl('', [Validators.required , Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required , Validators.minLength(6)]),
      email: new FormControl('', [Validators.required , Validators.minLength(6)]),
      dob: new FormControl('', [Validators.required , Validators.minLength(8)]),
      number: new FormControl('', [Validators.required ,Validators.min(1000000000),
        Validators.max(9999999999)]),
      role: new FormControl('', [Validators.required , Validators.minLength(4)]),
  
    }); 

  
  }

  submitForm() {
    /*this.registerForm.markAllAsTouched();
    if (this.registerForm.invalid) {
      return;
    }*/
    this.apiSpinner = true;
    this.registerService.getRegistration(this.registerForm).subscribe(
      (res: IRegistrationRes) => {
        this.apiSpinner = false;
        this.apiFlag = true;
        this.apiSuccess = res.Status ? true : false;
        this.errorMessage = res.Message;
      },
      (err) => {
        console.log(err);
      }
    );
    console.log(this.registerForm);
  
}
  setValidator() {
    this.registerForm.controls["confirmPassword"].setValidators([
      Validators.required,
      Validators.minLength(6),
      confirmPasswordValidator(this.registerForm.get("password").value),
    ]);
  }
  
  clearFun() {
    this.registerForm.reset();
  }
 

}
