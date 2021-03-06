import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { TimeslotComponent } from './timeslot/timeslot.component';
const routes: Routes = [{
  path:'',
  component: TimeslotComponent
},
{
  path:'appoinment',
  children: [{
    path: '',
    loadChildren: './apoinment-detail/apoinment-detail.module#ApoinmentDetailModule'
  }]
},
{
  path:'detail',
  children: [{
    path: '',
    loadChildren: './booking-detail/booking-detail.module#BookingDetailModule'
  }]
}]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
