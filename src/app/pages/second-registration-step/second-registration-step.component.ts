import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Industy, Role } from '../../core/models/user-registration.model';
import { RegistrationService } from '../../core/services/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-registration-step',
  imports: [
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './second-registration-step.component.html',
  styleUrl: './second-registration-step.component.scss',
})
export class SecondRegistrationStepComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  private registrationService = inject(RegistrationService);

  public industys = Object.values(Industy);
  public yourRole = Object.values(Role);

  public form = this.fb.group({
    industy: ['', Validators.required],
    experianceYears: [
      '',
      [Validators.required, Validators.min(0), Validators.max(50)],
    ],
    yourRole: ['', Validators.required],
  });


  public nextStep(): void {
    this.registrationService.setStepForm(3, this.form);
    this.router.navigate(['/register/step-3']);
  }
}
