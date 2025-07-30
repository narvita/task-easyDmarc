import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RegistrationService } from '../../core/services/registration.service';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-third-registration-step',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './third-registration-step.component.html',
  styleUrl: './third-registration-step.component.scss',
})
export class ThirdRegistrationStepComponent {
  private fb = inject(FormBuilder);
  private registrationService = inject(RegistrationService);
  private router = inject(Router);

  public form = this.fb.group({
    aboutUs: ['', Validators.required],
  });

  public nextStep(): void {
    if (this.form.valid) {
      this.registrationService.setStepForm(2, this.form);
      this.router.navigate(['/userInfo']);
    }
  }
}
