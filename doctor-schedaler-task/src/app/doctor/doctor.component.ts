import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Doctors} from "../doctors";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctors: Doctors[] = [];

  public displayedColumns = ['DoctorId', 'DoctorName'];

  public dataSource = new MatTableDataSource<Doctors>();


  constructor(private studentApiService: ApiService) { 
  }

  ngOnInit(): void {
    this.getDoctorInformation();
  }

  getDoctorInformation(){
    this.studentApiService.getDoctorInformation()
      .subscribe((res)=>{
        console.log(res);
        this.doctors = res;
      })
  }

}
