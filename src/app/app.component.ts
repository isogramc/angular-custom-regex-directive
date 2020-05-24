import { Component, VERSION } from '@angular/core';

import {FormControl, FormGroup, FormBuilder, FormArray, Validators, AbstractControl, ValidatorFn} from '@angular/forms';

function ageRangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value !== undefined && (isNaN(control.value)) || control.value < min || control.value > max) {
      return {ageRange: true};
    }
    return null;
  };
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major + ' custom form error validation and custom directive';
  minAge = 18;
  maxAge = 55;
  loginForm: FormGroup;

  constructor(){
     this.loginForm = new FormGroup({
       email: new FormControl(null, Validators.required),
       password: new FormControl(null, [Validators.required, Validators.maxLength(8)]),
       age: new FormControl(null, ageRangeValidator(this.minAge, this.maxAge))
    });
  }

  ifLoginUser(){
    console.log(this.loginForm.value);
    console.log(this.loginForm.status);
    // send to API etc.
  }
}
