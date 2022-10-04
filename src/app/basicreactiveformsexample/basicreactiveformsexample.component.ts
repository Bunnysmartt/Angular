import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { passwordvalidator, zipvalidator } from './customvalidators'
@Component({
  selector: 'app-basicreactiveformsexample',
  templateUrl: './basicreactiveformsexample.component.html',
  styleUrls: ['./basicreactiveformsexample.component.css']
})
export class BasicreactiveformsexampleComponent implements OnInit {
  Reactivefrm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.Reactivefrm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: '',
      cnfpassword: ['', passwordvalidator],
      zipvalidator: ['', zipvalidator]
    });
    this.Reactivefrm.controls['password'].valueChanges.subscribe(() => {
      this.Reactivefrm.controls['cnfpassword'].updateValueAndValidity()
    })
  }

  ngOnInit(): void {
  }

  OnSubmit(): void {
    this.Reactivefrm.markAllAsTouched();
  }

}
