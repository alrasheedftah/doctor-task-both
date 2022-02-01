import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoctorSchedualsComponent } from './add-doctor-scheduals.component';

describe('AddDoctorSchedualsComponent', () => {
  let component: AddDoctorSchedualsComponent;
  let fixture: ComponentFixture<AddDoctorSchedualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDoctorSchedualsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoctorSchedualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
