import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingDetailComponent } from './booking-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [{
  path: '',
  component: BookingDetailComponent
}]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [BookingDetailComponent]
})
export class BookingDetailModule { }
