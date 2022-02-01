import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import {ApiService} from "../api.service";
import {DoctorScheduals} from "../doctor-scheduals";
import { NgForm } from '@angular/forms';
import {DoctorSchedualsReqest} from '../doctor-scheduals-reqest'

@Component({
  selector: 'app-add-doctor-scheduals',
  templateUrl: './add-doctor-scheduals.component.html',
  styleUrls: ['./add-doctor-scheduals.component.css']
})
export class AddDoctorSchedualsComponent implements OnInit {
  id:any
  public result:any;
  data:any

  constructor(private route: ActivatedRoute,private doctorApiService: ApiService,private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')

  
  }

  newDoctorSchedual(doctorData:NgForm):void{
    let data={
      timeBetween : doctorData.value.timeBetween,
      waitingTime : doctorData.value.watingTime,
      sessionTime : doctorData.value.sessionTime,
      strDate : doctorData.value.startDate,
      doctorId : doctorData.value.waitingTime,
      endDate : doctorData.value.endDate,
    }
    console.log(data);
    if(doctorData.value.doctorName==""){

      alert("the doctorName required");
      // this.router.navigate(['']);
    }
    this.result=this.doctorApiService.storeDoctorScheduals(data,this.id).subscribe(
      doctor => {
        if(doctor){
        alert(" Created ")
        // this.router.navigate(['/doctors']);
        }
        else
        alert(" Somthing Wrong  ")

      });

  }
}
