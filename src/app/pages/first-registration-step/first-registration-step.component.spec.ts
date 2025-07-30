import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstRegistrationStepComponent } from './first-registration-step.component';

describe('FirstRegistrationStepComponent', () => {
  let component: FirstRegistrationStepComponent;
  let fixture: ComponentFixture<FirstRegistrationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstRegistrationStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstRegistrationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
