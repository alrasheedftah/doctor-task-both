import { Injectable } from '@angular/core';
//import student interface
import {Doctors} from "./doctors";
import { retry, catchError } from 'rxjs/operators';

import {DoctorScheduals} from "./doctor-scheduals";
import {DoctorSchedualsReqest} from "./doctor-scheduals-reqest";
//import this to make http requests
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Observable , throwError} from "rxjs";
//we've defined our base url here in the env
import {environment} from "./../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

    /**
   * This method returns doctors details
   */
 
     httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    } 

     getDoctorInformation(): Observable<Doctors[]>{
      return this.httpClient.get<Doctors[]>(`${environment.baseURL}/doctors`);
    }

    getDoctorScheduals(id : number): Observable<DoctorScheduals[]>{
      return this.httpClient.get<DoctorScheduals[]>(`${environment.baseURL}/doctors/${id}/scheduals`);
    }

    createNewDoctor(doctorName:string): Observable<string>{
      console.log(doctorName)
     let doctor= this.httpClient.post<string>(`${environment.baseURL}/doctors`,{doctorName:doctorName},this.httpHeader)
       
      return doctor;
    }

    processError(err: any) {
      console.log("ana");
      let message = '';
      console.log(err.error.message);
      return throwError(message);
    }

    storeDoctorScheduals(formData:any,doctorId:any): Observable<any>{
      console.log(formData);
      return this.httpClient.post<any>(`${environment.baseURL}/doctors/${doctorId}/scheduals`,formData,this.httpHeader)
      .pipe();
    }
}
