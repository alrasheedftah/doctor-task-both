import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSchedualsComponent } from './doctor-scheduals.component';

describe('DoctorSchedualsComponent', () => {
  let component: DoctorSchedualsComponent;
  let fixture: ComponentFixture<DoctorSchedualsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorSchedualsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSchedualsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
