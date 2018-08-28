import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-apoinment-detail',
  templateUrl: './apoinment-detail.component.html',
  styleUrls: ['./apoinment-detail.component.css']
})
export class ApoinmentDetailComponent implements OnInit {
  isValidFormSubmitted = false;
  apoinmentForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
  private router: Router) { }
  ngOnInit() {
    this.apoinmentForm = this.createFormGroup();
  }
  /* creates appoinment form*/
  createFormGroup() {
    return new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      mobile: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
      ]))
    });
  }
  /*submit the form and stores data into local storage */
  onSubmit() {
    this.isValidFormSubmitted = true;
    localStorage.setItem('First Name', this.apoinmentForm.value.firstName);
    localStorage.setItem('Last Name', this.apoinmentForm.value.lastName);
    localStorage.setItem('Mobile Number', this.apoinmentForm.value.mobile);
    this.router.navigate(['/']);
  }
  /*reset form and clears localstorage */
  revert() {
    this.apoinmentForm.reset();
    localStorage.clear()
  }
}
