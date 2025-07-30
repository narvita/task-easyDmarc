import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondRegistrationStepComponent } from './second-registration-step.component';

describe('SecondRegistrationStepComponent', () => {
  let component: SecondRegistrationStepComponent;
  let fixture: ComponentFixture<SecondRegistrationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondRegistrationStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondRegistrationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
