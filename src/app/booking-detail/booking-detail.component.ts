import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {
    firstName = '';
    lastName = '';
    mobile = '';
  constructor() { }
  ngOnInit() {
    this.firstName = localStorage.getItem('First Name');
    this.lastName = localStorage.getItem('Last Name');
    this.mobile = localStorage.getItem('Mobile Number');
  }
  edit(value) {
    localStorage.setItem('First Name', this.firstName);
    localStorage.setItem('Last Name', this.lastName);
    localStorage.setItem('Mobile Number', this.mobile);
  }
}
