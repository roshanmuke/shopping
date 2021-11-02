import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  title: any = "";
  errorMessage: string = "";
  apiFlag: boolean = false;
  apiSpinner: boolean = false;
  apiSuccess: boolean = false;
  UserForm: any = FormGroup;
  currentUser: any = {
    UserName: '',
    UserEmail: '', UserPassword: '', UserRole: '', UserMobile: '', UserDOB: ''
  };

  constructor(private userService: UserService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      const id = params["id"];
      const action = params["action"];
      if (action == "add") {
        this.title = "Add";
      } else if (action == "edit") {
        this.title = "Edit";
        this.getProductById(id);
        console.log(this.currentUser);

      } else {
        this.title = "View";
        this.getProductById(id);
      }

      alert(action);
    });


  }

  updateUserForm() {

    this.UserForm = new FormGroup({
      userName: new FormControl(
        {
          value: this.currentUser.UserName,
          disabled: this.title == "View" ? true : false,
        },
        [Validators.required,
        Validators.minLength(3)]
      ),

      userEmail: new FormControl(
        {
          value: this.currentUser.UserEmail,
          disabled: this.title == "View" ? true : false,
        },
        [
          Validators.required,
          Validators.minLength(1),
        ]),

      userPassword: new FormControl(
        {
          value: this.currentUser.UserPassword,
          disabled: this.title == "View" ? true : false
        }, [
        Validators.required,
        Validators.minLength(2),
      ]),

      userRole: new FormControl(
        {
          value: this.currentUser.UserRole,
          disabled: this.title == "View" ? true : false
        }, [
        Validators.required,
        Validators.minLength(2),
      ]),

      userMobile: new FormControl(
        {
          value: this.currentUser.UserMobile,
          disabled: this.title == "View" ? true : false
        }, [
        Validators.required,
        Validators.minLength(2),
      ]),

      userDOB: new FormControl(
        {
          value: this.currentUser.UserDOB,
          disabled: this.title == "View" ? true : false
        }, [
        Validators.required,
        Validators.minLength(2),
      ]),
      role: new FormControl("", [Validators.required]),

    });
  }

  getProductById(id) {
    this.userService
      .getUserById(id)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.apiSpinner = false;
          this.apiFlag = true;
          this.apiSuccess = res.Status ? true : false;
          this.errorMessage = res.Message;
          this.currentUser = res.Data;
          this.updateUserForm();

        },
        (err) => {
          console.log(err);
        }
      );
  }
  submitUserForm() {
    /* this.UserForm.markAllAsTouched();
     if (this.UserForm.invalid) {
       return;
     }*/
    this.apiSpinner = true;

    if (this.title == "Edit") {

      this.userService.editUser(this.currentUser.User_ID, this.UserForm)
        .subscribe(
          (res: any) => {
            console.log(res);
            this.apiSpinner = false;
            this.apiFlag = true;
            this.apiSuccess = res.Status ? true : false;
            this.errorMessage = res.Message;
          });
    }
    else {
      console.log("Error !!!");
    }

    console.log(this.UserForm);
  }
  clearUserForm() {
    this.UserForm.reset();
  }
}
