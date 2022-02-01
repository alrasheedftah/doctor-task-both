import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DoctorComponent} from './doctor/doctor.component'
import {AddDoctorDataComponent} from './add-doctor-data/add-doctor-data.component'
import {AddDoctorSchedualsComponent} from './add-doctor-scheduals/add-doctor-scheduals.component'
import {DoctorSchedualsComponent} from './doctor-scheduals/doctor-scheduals.component'

const routes: Routes = [
  {path:"",component:DoctorComponent},
  {path:"doctors",component:DoctorComponent},
  {path:"newdoctors",component:AddDoctorDataComponent},
  {path:"newdoctorsschedual/:id",component:AddDoctorSchedualsComponent},
  {path:"doctorschedual/:id",component:DoctorSchedualsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
