import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdRegistrationStepComponent } from './third-registration-step.component';

describe('ThirdRegistrationStepComponent', () => {
  let component: ThirdRegistrationStepComponent;
  let fixture: ComponentFixture<ThirdRegistrationStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdRegistrationStepComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdRegistrationStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
