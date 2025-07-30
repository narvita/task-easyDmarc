import { Component, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {
  EmailValidator,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegistrationService } from '../../core/services/registration.service';
import { Router } from '@angular/router';
import { confirmPasswordValidator } from '../../shared/utils/castom-validators';

@Component({
  selector: 'app-first-registration-step',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  standalone: true,
  templateUrl: './first-registration-step.component.html',
  styleUrl: './first-registration-step.component.scss',
})
export class FirstRegistrationStepComponent {
  private fb = inject(FormBuilder);
  private registrationService = inject(RegistrationService);
  private router = inject(Router);

  public form = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: confirmPasswordValidator() }
  );

  get passwordMismatch() {
    return (
      this.form.hasError('passwordsMismatch') &&
      this.form.get('confirmPassword')?.touched
    );
  }

  public nextStep(): void {
    if (this.form.valid) {

      this.registrationService.setStepForm(1, this.form);
      this.router.navigate(['/register/step-2']);
    }
  }
}
