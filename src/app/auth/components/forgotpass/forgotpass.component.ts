import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.scss']
})
export class ForgotpassComponent implements OnInit {

forgotForm;
email;

  constructor() { }

  ngOnInit(): void {

    this.forgotForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

}
