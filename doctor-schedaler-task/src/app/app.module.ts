import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppfooterComponent } from './appfooter/appfooter.component';

// imort Ap Module
import { AppMaterialModule } from "./app.material-module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from "@angular/common/http";
import { DoctorComponent } from './doctor/doctor.component';
import { AddDoctorDataComponent } from './add-doctor-data/add-doctor-data.component';
import { AddDoctorSchedualsComponent } from './add-doctor-scheduals/add-doctor-scheduals.component';
import { DoctorSchedualsComponent } from './doctor-scheduals/doctor-scheduals.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    SidebarComponent,
    AppfooterComponent,
    DoctorComponent,
    AddDoctorDataComponent,
    AddDoctorSchedualsComponent,
    DoctorSchedualsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule, //
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
