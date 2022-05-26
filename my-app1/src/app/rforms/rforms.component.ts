import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rforms',
  templateUrl: './rforms.component.html',
  styleUrls: ['./rforms.component.css'],
})
export class RformsComponent implements OnInit {
  genders = ['male', 'female'];
  constructor() {}
  signUpForm: FormGroup;

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('female'),
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    console.log(this.signUpForm);
  }
}
