import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ApiService} from "../api.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-doctor-data',
  templateUrl: './add-doctor-data.component.html',
  styleUrls: ['./add-doctor-data.component.css']
})
export class AddDoctorDataComponent implements OnInit {

  constructor(private doctorApiService: ApiService,  private router:Router) { }

  public result:any;
  newDoctor(doctorData:NgForm):void{
    console.log(doctorData)
    if(doctorData.value.doctorName==""){

      alert("the doctorName required");
      this.router.navigate(['']);
    }
    this.result=this.doctorApiService.createNewDoctor(doctorData.value.doctorName).subscribe(
      doctor => {
        if(doctor){
        alert(" Created ")
        this.router.navigate(['/doctors']);
        }
        else
        alert(" Somthing Wrong  ")

      });

  }


  ngOnInit(): void {
  }

}
