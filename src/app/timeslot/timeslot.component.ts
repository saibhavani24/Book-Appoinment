import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-timeslot',
  templateUrl: './timeslot.component.html',
  styleUrls: ['./timeslot.component.css']
})
export class TimeslotComponent implements OnInit {
  time = ['9:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00',
    '13:00 - 14:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00',
    '17:00 - 18:00',
  ];
  booked: any;
  constructor(
    private router: Router
  ) { }
  ngOnInit() {
    this.booked = localStorage.getItem('Timing');
  }
  /* store time slot in local storage and navigate to appoinment form */
  bookAppoinment(params) {
    localStorage.setItem('Timing', params);
    if (this.booked === params) {
      this.router.navigate(['/detail']);
    } else {
      this.router.navigate(['/appoinment'])
    }
  }
}
