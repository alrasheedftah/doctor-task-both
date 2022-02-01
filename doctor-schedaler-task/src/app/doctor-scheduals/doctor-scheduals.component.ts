import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import {ApiService} from "../api.service";
import {DoctorScheduals} from "../doctor-scheduals";

@Component({
  selector: 'app-doctor-scheduals',
  templateUrl: './doctor-scheduals.component.html',
  styleUrls: ['./doctor-scheduals.component.css']
})
export class DoctorSchedualsComponent implements OnInit {
  id:any
  doctorName:any
  doctorSchedals:DoctorScheduals[]=[]
  constructor(private route: ActivatedRoute,private doctorApiService: ApiService) { 
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.doctorName = this.route.snapshot.queryParamMap.get("name");
    
    // console.log("name  : "+this.doctorName)
    this.getDoctorScheduals();
  }


  getDoctorScheduals(){
    this.doctorApiService.getDoctorScheduals(this.id)
      .subscribe((res)=>{
        console.log(res);
        this.doctorSchedals = res;
      })
  }


}
