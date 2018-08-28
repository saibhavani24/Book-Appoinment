import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApoinmentDetailComponent } from './apoinment-detail.component';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [{
  path: '',
  component: ApoinmentDetailComponent
}]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [ApoinmentDetailComponent]
})
export class ApoinmentDetailModule { }
