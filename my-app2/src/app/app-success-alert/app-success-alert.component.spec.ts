import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSuccessAlertComponent } from './app-success-alert.component';

describe('AppSuccessAlertComponent', () => {
  let component: AppSuccessAlertComponent;
  let fixture: ComponentFixture<AppSuccessAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSuccessAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSuccessAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
