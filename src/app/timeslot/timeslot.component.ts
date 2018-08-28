import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-timeslot',
  templateUrl: './timeslot.component.html',
  styleUrls: ['./timeslot.component.css']
})
export class TimeslotComponent implements OnInit {
time: any;
  constructor(
    private router: Router
  ) { }
  ngOnInit() {
    this.time = localStorage.getItem('Timing');
  }
  /* store time slot in local storage and navigate to appoinment form */
  bookAppoinment(params) {
    localStorage.getItem('Timing');
    localStorage.setItem('Timing', params);
    this.router.navigate(['/appoinment'])
  }
}
