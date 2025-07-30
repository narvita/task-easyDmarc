import { Injectable, signal, computed, WritableSignal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserRegistartionStepEnum } from '../models/user-registration.model';

@Injectable({ providedIn: 'root' })
export class RegistrationService {
  private step1Form = signal<FormGroup | null>(null);
  private step2Form = signal<FormGroup | null>(null);
  private step3Form = signal<FormGroup | null>(null);

  completedSteps = signal<number>(0);

  setStepForm(step: UserRegistartionStepEnum, form: FormGroup) {
    if (step === 1) this.step1Form.set(form);
    if (step === 2) this.step2Form.set(form);
    if (step === 3) this.step3Form.set(form);
    this.completedSteps.set(step);
  }

  getAllValues() {
    return {
      ...this.step1Form()?.value,
      ...this.step2Form()?.value,
      ...this.step3Form()?.value,
    };
  }
}
